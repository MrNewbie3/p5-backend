import express from 'express';
import { createCartItem, getAllCartItems, getCartItemById, updateCartItem, deleteCartItem } from '../controllers/cart.controller';

const router = express.Router();

// Create a new cart item
router.post('/', createCartItem);

// Get all cart items
router.get('/', getAllCartItems);

// Get cart item by ID
router.get('/:id', getCartItemById);

// Update cart item by ID
router.put('/:id', updateCartItem);

// Delete cart item by ID
router.delete('/:id', deleteCartItem);

export default router;
