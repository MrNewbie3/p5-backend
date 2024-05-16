"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCartItem = exports.updateCartItem = exports.getCartItemById = exports.getAllCartItems = exports.createCartItem = void 0;
const client_1 = require("@prisma/client");
const response_helper_1 = require("../helper/response.helper");
const prisma = new client_1.PrismaClient();
// Create a new cart item
const createCartItem = async (req, res) => {
    const { cart_id, menu_id, quantity, price_per_item, subtotal } = req.body;
    try {
        const cartItem = await prisma.cartItem.create({
            data: {
                cart_id,
                menu_id,
                quantity,
                price_per_item,
                subtotal,
            },
        });
        res.json(cartItem);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.createCartItem = createCartItem;
// Get all cart items
const getAllCartItems = async (req, res) => {
    try {
        const cartItems = await prisma.cartItem.findMany();
        res.json(cartItems);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.getAllCartItems = getAllCartItems;
// Get cart item by ID
const getCartItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const cartItem = await prisma.cartItem.findUnique({ where: { cart_item_id: parseInt(id) } });
        if (!cartItem) {
            return res.status(404).json({ error: "Cart item not found" });
        }
        res.json(cartItem);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.getCartItemById = getCartItemById;
// Update cart item by ID
const updateCartItem = async (req, res) => {
    const { id } = req.params;
    const { user_id, menu_id, quantity, price_per_item, total } = req.body;
    try {
        const updatedCartItem = await prisma.cartItem.update({
            where: { cart_item_id: parseInt(id) },
            data: req.body,
        });
        res.json(updatedCartItem);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.updateCartItem = updateCartItem;
// Delete cart item by ID
const deleteCartItem = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.cartItem.delete({ where: { cart_item_id: parseInt(id) } });
        res.json({ message: "Cart item deleted successfully" });
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.deleteCartItem = deleteCartItem;
