import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { InternalServerError } from "../helper/response.helper";
import { ValidationError, isArray, validate } from "class-validator";
import CreateCanteenDTO from "../validation/canteen-dto";
import { getUserById } from "./user.controller";

const prisma = new PrismaClient();

// Create a new canteen
export const createCanteen = async (req: Request, res: Response) => {
  if (isArray(req.body)) {
    try {
      const bulkInsert = await prisma.menu.createMany({
        data: req.body,
      });
      return res.json(bulkInsert);
    } catch (error) {
      console.log(error);
      throw new Error(error as any);
    }
  }
  const { canteen_id, user_id, canteen_number, orders, Menu, image_url, payment_method, bank_account_number, last_seen } = req.body;

  const createCanteenDto = new CreateCanteenDTO(canteen_id, user_id, canteen_number, orders, Menu, image_url, payment_method, bank_account_number, last_seen);

  const errors = await validate(createCanteenDto);
  if (errors.length > 0) {
    return res.status(400).json({
      code: 400,
      message: "Bad request",
      errors: errors.flatMap((error: ValidationError) => Object.values(error.constraints || {})),
    });
  }

  try {
    const canteen = await prisma.canteen.create({
      data: {
        user_id,
        canteen_number,
        image_url,
        payment_method,
        bank_account_number,
        last_seen,
      },
    });

    res.status(200).json(canteen);
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Get all canteens
export const getAllCanteens = async (req: Request, res: Response) => {
  try {
    const canteens = await prisma.canteen.findMany();
    res.json(canteens);
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Get canteen by ID
export const getCanteenById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const canteen = await prisma.canteen.findUnique({ where: { canteen_id: parseInt(id) }, include: { Menu: true } });
    if (!canteen) {
      return res.status(404).json({ error: "Canteen not found" });
    }
    res.json(canteen);
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Update canteen by ID
export const updateCanteen = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user_id, canteen_number, image_url, payment_method, bank_account_number } = req.body;
  try {
    const updatedCanteen = await prisma.canteen.update({
      where: { canteen_id: parseInt(id) },
      data: {
        user_id,
        canteen_number,
        image_url,
        payment_method,
        bank_account_number,
      },
    });
    res.json(updatedCanteen);
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Delete canteen by ID
export const deleteCanteen = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.canteen.delete({ where: { canteen_id: parseInt(id) } });
    res.json({ message: "Canteen deleted successfully" });
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};
