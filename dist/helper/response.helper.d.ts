import { Request, Response } from "express";
export declare const InternalServerError: (message: String, res?: Response, req?: Request) => Promise<Response<any, Record<string, any>> | undefined>;
