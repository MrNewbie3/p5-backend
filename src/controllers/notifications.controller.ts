import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new notification
export const createNotification = async (req: Request, res: Response) => {
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
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all notifications
export const getAllNotifications = async (req: Request, res: Response) => {
  try {
    const notifications = await prisma.notificationDetail.findMany();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get notification by ID
export const getNotificationById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const notification = await prisma.notificationDetail.findUnique({ where: { notification_detail_id: parseInt(id) } });
    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update notification by ID
export const updateNotification = async (req: Request, res: Response) => {
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
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete notification by ID
export const deleteNotification = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.notificationDetail.delete({ where: { notification_detail_id: parseInt(id) } });
    res.json({ message: 'Notification deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
