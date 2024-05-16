import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { InternalServerError } from "../helper/response.helper";
import { ValidationError, validate } from "class-validator";
import CreateCartItemDTO from "../validation/cart_item-dto";

const prisma = new PrismaClient();

// Create a new cart item
export const createCartItem = async (req: Request, res: Response) => {
  let { cart_id, cart, user_id } = req.body;
  
  const cart_ = await prisma.cart.findFirst({
    where: {
      user_id: Number(user_id),
    },
  });
  cart_id = cart_?.cart_id;
  if (!cart_) {
    const createCart = await prisma.cart.create({
      data: {
        user_id: Number(user_id),
        total: 0,
      },
    });
    if (!createCart) {
      return res.status(500).json({ error: createCart });
    }
    cart_id = createCart.cart_id;
  }
  try {
    const data = cart.map((data: any) => ({
      cart_id: Number(cart_id),
      menu_id: Number(data.menu_id),
      quantity: data.quantity,
      price_per_item: data.price,
      subtotal: Number(data.price) * Number(data.quantity),
    }));
    const cartItem = await prisma.cartItem.createMany({
      data,
    });
    res.json(cartItem);
  } catch (error) {
    return InternalServerError(error as any, res, req);
  }
};

// Get all cart items
export const getAllCartItems = async (req: Request, res: Response) => {
  try {
    const cartItems = await prisma.cartItem.findMany();
    res.json(cartItems);
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Get cart item by ID
export const getCartItemById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const cartItem = await prisma.cart.findFirst({
      where: { user_id: parseInt(id) },
      include: {
        cart_items: {
          include: {
            menu: {
              include: {
                canteen: true,
              },
            },
          },
        },
      },
    });
    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }
    res.json(cartItem);
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Update cart item by ID
export const updateCartItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user_id, menu_id, quantity, price_per_item, total } = req.body;
  try {
    const updatedCartItem = await prisma.cartItem.update({
      where: { cart_item_id: parseInt(id) },
      data: req.body,
    });
    res.json(updatedCartItem);
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};

// Delete cart item by ID
export const deleteCartItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.cartItem.delete({ where: { cart_item_id: parseInt(id) } });
    res.json({ message: "Cart item deleted successfully" });
  } catch (error) {
    return InternalServerError("Error", res, req);
  }
};
