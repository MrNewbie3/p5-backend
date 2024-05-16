import express from 'express';
import { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } from '../controllers/order.controller';

const router = express.Router();

// Create a new order
router.post('/', createOrder);

// Get all orders
router.get('/', getAllOrders);

// Get order by ID
router.get('/:id', getOrderById);

// Update order by ID
router.put('/:id', updateOrder);

// Delete order by ID
router.delete('/:id', deleteOrder);

export default router;
