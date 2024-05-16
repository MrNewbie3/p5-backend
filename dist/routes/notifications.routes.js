"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notifications_controller_1 = require("../controllers/notifications.controller");
const router = express_1.default.Router();
// Create a new notification
router.post('/', notifications_controller_1.createNotification);
// Get all notifications
router.get('/', notifications_controller_1.getAllNotifications);
// Get notification by ID
router.get('/:id', notifications_controller_1.getNotificationById);
// Update notification by ID
router.put('/:id', notifications_controller_1.updateNotification);
// Delete notification by ID
router.delete('/:id', notifications_controller_1.deleteNotification);
exports.default = router;
