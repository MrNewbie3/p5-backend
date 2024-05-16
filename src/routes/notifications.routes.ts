import express from 'express';
import { createNotification, getAllNotifications, getNotificationById, updateNotification, deleteNotification } from '../controllers/notifications.controller';

const router = express.Router();

// Create a new notification
router.post('/', createNotification);

// Get all notifications
router.get('/', getAllNotifications);

// Get notification by ID
router.get('/:id', getNotificationById);

// Update notification by ID
router.put('/:id', updateNotification);

// Delete notification by ID
router.delete('/:id', deleteNotification);

export default router;
