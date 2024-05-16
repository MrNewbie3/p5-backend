import { Request, Response } from "express";
export declare const createCanteen: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllCanteens: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getCanteenById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCanteen: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteCanteen: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
