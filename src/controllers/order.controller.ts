import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { InternalServerError } from "../helper/response.helper";
import { getUserById } from "./user.controller";
import { sendNotif } from "../config/admin-notif.config";

const prisma = new PrismaClient();

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
  // const { user_id, canteen_id, payment_method, amount_total, fee, status, payment_method_provider, payment_status, process_status } = req.body;
  try {
    // const order = await prisma.order.create({
    //   data: {
    //     user_id,
    //     canteen_id,
    //     payment_method,
    //     fee,
    //     status,
    //     amount_total,
    //     payment_method_provider,
    //     payment_status,
    //     process_status,
    //   },
    // });
    // const canteenWithUser = await prisma.canteen.findUnique({
    //   where: {
    //     canteen_id: Number(canteen_id),
    //   },
    //   include: {
    //     user: true,
    //   },
    // });
    // if (!canteenWithUser) {
    //   return res.status(400).json({
    //     code: 400,
    //     message: "user not found",
    //     success: false,
    //     data: [],
    //   });
    // }
    //  @ts-ignore
    const token = "dDAqPmyR4VUIsjl65vMd-Y:APA91bEmvDQf2tzeO6Eey2INrV-38KpbmAEToISJDlkakodeIl8iN2XqMwplg2WQbPNpONYrpZdsVw1vi-sVX_EgcZ2-YHHUUptIfRVmcQsmyK5a7iW5rAwMgxQg-5zDGnHB8OgpSkgV";
    //  @ts-ignore
    const sendingNotifications = await sendNotif(token, "New Order Arrived!", "New order has arrived! check it as soon as possible");
    if (!sendingNotifications) {
      return res.status(500).json({
        message: "an error occurred" + sendingNotifications,
      });
    }
    res.send(sendingNotifications);
    // res.json(order);
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Get all orders
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany();
    res.json(orders);
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Get order by ID
export const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await prisma.order.findUnique({ where: { order_id: parseInt(id) } });
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Update order by ID
export const updateOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user_id, canteen_id, payment_method, amount, fee, status } = req.body;
  try {
    const updatedOrder = await prisma.order.update({
      where: { order_id: parseInt(id) },
      data: req.body,
    });
    res.json(updatedOrder);
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Delete order by ID
export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.order.delete({ where: { order_id: parseInt(id) } });
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};
