import { NextFunction, Request, Response } from "express";
export declare const jwtSign: (payload: any) => string;
export declare const authenticateToken: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
