import * as jwt from "jsonwebtoken";
import * as fs from "fs";
import { NextFunction, Request, Response } from "express";

export const jwtSign = (payload: any) => {
  const secret: jwt.Secret = fs.readFileSync("private-key.pem", "utf-8");
  const token = jwt.sign(payload, secret, {
    algorithm: "RS256",
    expiresIn: "3h",
  });
  return token;
};

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const secret: jwt.Secret = fs.readFileSync("private-key.pem", "utf-8");

  if (!token) {
    return res.status(401).json({ code: 401, success: false, message: "Unauthorized" });
  }

  // Verify and decode the token
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ code: 403, message: "Invalid token", error: err, status: false });
    }
    // @ts-ignore
    req.user = decoded;
    next();
  });
};
