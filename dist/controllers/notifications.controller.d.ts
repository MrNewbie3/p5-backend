import { Request, Response } from 'express';
export declare const createNotification: (req: Request, res: Response) => Promise<void>;
export declare const getAllNotifications: (req: Request, res: Response) => Promise<void>;
export declare const getNotificationById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateNotification: (req: Request, res: Response) => Promise<void>;
export declare const deleteNotification: (req: Request, res: Response) => Promise<void>;
