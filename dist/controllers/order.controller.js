"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.getAllOrders = exports.createOrder = void 0;
const client_1 = require("@prisma/client");
const response_helper_1 = require("../helper/response.helper");
const prisma = new client_1.PrismaClient();
// Create a new order
const createOrder = async (req, res) => {
    const { user_id, canteen_id, payment_method, amount_total, fee, status, payment_method_provider, payment_status, process_status } = req.body;
    try {
        const order = await prisma.order.create({
            data: {
                user_id,
                canteen_id,
                payment_method,
                fee,
                status,
                amount_total,
                payment_method_provider,
                payment_status,
                process_status,
            },
        });
        res.json(order);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.createOrder = createOrder;
// Get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await prisma.order.findMany();
        res.json(orders);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.getAllOrders = getAllOrders;
// Get order by ID
const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await prisma.order.findUnique({ where: { order_id: parseInt(id) } });
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        res.json(order);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.getOrderById = getOrderById;
// Update order by ID
const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { user_id, canteen_id, payment_method, amount, fee, status } = req.body;
    try {
        const updatedOrder = await prisma.order.update({
            where: { order_id: parseInt(id) },
            data: req.body,
        });
        res.json(updatedOrder);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.updateOrder = updateOrder;
// Delete order by ID
const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.order.delete({ where: { order_id: parseInt(id) } });
        res.json({ message: "Order deleted successfully" });
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.deleteOrder = deleteOrder;
