"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controllers/order.controller");
const router = express_1.default.Router();
// Create a new order
router.post('/', order_controller_1.createOrder);
// Get all orders
router.get('/', order_controller_1.getAllOrders);
// Get order by ID
router.get('/:id', order_controller_1.getOrderById);
// Update order by ID
router.put('/:id', order_controller_1.updateOrder);
// Delete order by ID
router.delete('/:id', order_controller_1.deleteOrder);
exports.default = router;
