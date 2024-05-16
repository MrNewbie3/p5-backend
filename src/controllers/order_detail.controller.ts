import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new order detail
export const createOrderDetail = async (req: Request, res: Response) => {
  const { order_id, menu_id, sub_total, quantity } = req.body;
  try {
    const orderDetail = await prisma.orderDetail.create({
      data: {
        order_id,
        menu_id,
        sub_total,
        quantity,
      },
    });
    res.json(orderDetail);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all order details
export const getAllOrderDetails = async (req: Request, res: Response) => {
  try {
    const orderDetails = await prisma.orderDetail.findMany();
    res.json(orderDetails);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get order detail by ID
export const getOrderDetailById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const orderDetail = await prisma.orderDetail.findUnique({ where: { order_detail_id: parseInt(id) } });
    if (!orderDetail) {
      return res.status(404).json({ error: 'Order detail not found' });
    }
    res.json(orderDetail);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update order detail by ID
export const updateOrderDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { order_id, menu_id, sub_total, quantity } = req.body;
  try {
    const updatedOrderDetail = await prisma.orderDetail.update({
      where: { order_detail_id: parseInt(id) },
      data: {
        order_id,
        menu_id,
        sub_total,
        quantity,
      },
    });
    res.json(updatedOrderDetail);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete order detail by ID
export const deleteOrderDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.orderDetail.delete({ where: { order_detail_id: parseInt(id) } });
    res.json({ message: 'Order detail deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
