import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { InternalServerError } from "../helper/response.helper";
import { jwtSign } from "../services/auth.service";

const prisma = new PrismaClient();

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  const { name, email, role, fullname, password, status, fcm_token } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const token = jwtSign(req.body);
    const user = await prisma.user.create({
      data: {
        fullname,
        name,
        role,
        status,
        email,
        password: hashedPassword,
        fcm_token,
      },
    });
    res.json({ user, token });
  } catch (error) {
    console.log(error);
    return InternalServerError(error as any, res, req);
  }
};

// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Get user by ID
export const getUserById = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { user_id: parseInt(id) } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ user, token: req.headers.authorization?.split("Bearer ")[1] });
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Update user by ID
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedUser = await prisma.user.update({
      where: { user_id: parseInt(id) },
      data: req.body,
    });
    res.json(updatedUser);
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Delete user by ID
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { user_id: parseInt(id) } });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password, is_google_loggin } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    if (!is_google_loggin) {
      const comparisonPassword = bcrypt.compareSync(password, user.password);
      if (!comparisonPassword) {
        return res.status(401).json({ error: "Wrong password" });
      }
    }
    const statusLoggedIn = await prisma.user.update({
      where: {
        email,
      },
      data: {
        status: "LOGGED_IN",
      },
    });
    if (!statusLoggedIn) {
      return InternalServerError("Error", res, req);
    }
    const token = jwtSign(user);
    return res.status(200).json({ code: 200, message: "success login", status: true, data: statusLoggedIn, token });
  } catch (error) {
    console.log(error);
    return InternalServerError(error as string, res, req);
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    const logout = await prisma.user.update({
      where: {
        user_id: Number(req.params.id),
      },
      data: {
        status: "LOGGED_OUT",
      },
    });
    return res.status(200).json({
      code: 200,
      message: "Success Logged Out",
      success: true,
      data: logout,
    });
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};
