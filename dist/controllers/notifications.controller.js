"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotification = exports.updateNotification = exports.getNotificationById = exports.getAllNotifications = exports.createNotification = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Create a new notification
const createNotification = async (req, res) => {
    const { user_id, message, headline, notification_id } = req.body;
    try {
        const notification = await prisma.notificationDetail.create({
            data: {
                message,
                headline,
                notification_id,
            },
        });
        res.json(notification);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.createNotification = createNotification;
// Get all notifications
const getAllNotifications = async (req, res) => {
    try {
        const notifications = await prisma.notificationDetail.findMany();
        res.json(notifications);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getAllNotifications = getAllNotifications;
// Get notification by ID
const getNotificationById = async (req, res) => {
    const { id } = req.params;
    try {
        const notification = await prisma.notificationDetail.findUnique({ where: { notification_detail_id: parseInt(id) } });
        if (!notification) {
            return res.status(404).json({ error: 'Notification not found' });
        }
        res.json(notification);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getNotificationById = getNotificationById;
// Update notification by ID
const updateNotification = async (req, res) => {
    const { id } = req.params;
    const { user_id, message, headline } = req.body;
    try {
        const updatedNotification = await prisma.notificationDetail.update({
            where: { notification_detail_id: parseInt(id) },
            data: {
                message,
                headline,
            },
        });
        res.json(updatedNotification);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.updateNotification = updateNotification;
// Delete notification by ID
const deleteNotification = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.notificationDetail.delete({ where: { notification_detail_id: parseInt(id) } });
        res.json({ message: 'Notification deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.deleteNotification = deleteNotification;
