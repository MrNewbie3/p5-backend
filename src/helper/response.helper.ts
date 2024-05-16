import { Request, Response } from "express";

export const InternalServerError = async (message: String, res?: Response, req?: Request) => {
  return res?.status(500).json({ error: message, success: false, code: 500 });
};
