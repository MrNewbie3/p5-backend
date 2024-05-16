import { Request, Response } from "express";
export declare const createCartItem: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllCartItems: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getCartItemById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCartItem: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteCartItem: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
