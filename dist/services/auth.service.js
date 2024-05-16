"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.jwtSign = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const fs = __importStar(require("fs"));
const jwtSign = (payload) => {
    const secret = fs.readFileSync("private-key.pem", "utf-8");
    const token = jwt.sign(payload, secret, {
        algorithm: "RS256",
        expiresIn: "3h",
    });
    return token;
};
exports.jwtSign = jwtSign;
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const secret = fs.readFileSync("private-key.pem", "utf-8");
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
exports.authenticateToken = authenticateToken;
