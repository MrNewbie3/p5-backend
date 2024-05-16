"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
const InternalServerError = async (message, res, req) => {
    return res?.status(500).json({ error: message, success: false, code: 500 });
};
exports.InternalServerError = InternalServerError;
