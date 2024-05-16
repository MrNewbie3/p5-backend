"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cart_controller_1 = require("../controllers/cart.controller");
const router = express_1.default.Router();
// Create a new cart item
router.post('/', cart_controller_1.createCartItem);
// Get all cart items
router.get('/', cart_controller_1.getAllCartItems);
// Get cart item by ID
router.get('/:id', cart_controller_1.getCartItemById);
// Update cart item by ID
router.put('/:id', cart_controller_1.updateCartItem);
// Delete cart item by ID
router.delete('/:id', cart_controller_1.deleteCartItem);
exports.default = router;
