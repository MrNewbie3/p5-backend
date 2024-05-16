"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderDetail = exports.updateOrderDetail = exports.getOrderDetailById = exports.getAllOrderDetails = exports.createOrderDetail = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Create a new order detail
const createOrderDetail = async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.createOrderDetail = createOrderDetail;
// Get all order details
const getAllOrderDetails = async (req, res) => {
    try {
        const orderDetails = await prisma.orderDetail.findMany();
        res.json(orderDetails);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getAllOrderDetails = getAllOrderDetails;
// Get order detail by ID
const getOrderDetailById = async (req, res) => {
    const { id } = req.params;
    try {
        const orderDetail = await prisma.orderDetail.findUnique({ where: { order_detail_id: parseInt(id) } });
        if (!orderDetail) {
            return res.status(404).json({ error: 'Order detail not found' });
        }
        res.json(orderDetail);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getOrderDetailById = getOrderDetailById;
// Update order detail by ID
const updateOrderDetail = async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.updateOrderDetail = updateOrderDetail;
// Delete order detail by ID
const deleteOrderDetail = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.orderDetail.delete({ where: { order_detail_id: parseInt(id) } });
        res.json({ message: 'Order detail deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.deleteOrderDetail = deleteOrderDetail;
