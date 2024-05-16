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
exports.logout = exports.login = exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const response_helper_1 = require("../helper/response.helper");
const auth_service_1 = require("../services/auth.service");
const prisma = new client_1.PrismaClient();
// Create a new user
const createUser = async (req, res) => {
    const { name, email, role, fullname, password, status } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
        const user = await prisma.user.create({
            data: {
                fullname,
                name,
                role,
                status,
                email,
                password: hashedPassword,
            },
        });
        res.json(user);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.createUser = createUser;
// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.getAllUsers = getAllUsers;
// Get user by ID
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({ where: { user_id: parseInt(id) } });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.getUserById = getUserById;
// Update user by ID
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, role } = req.body;
    try {
        const updatedUser = await prisma.user.update({
            where: { user_id: parseInt(id) },
            data: req.body,
        });
        res.json(updatedUser);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.updateUser = updateUser;
// Delete user by ID
const deleteUser = async (req, res) => {
    console.log("delete user");
    const { id } = req.params;
    try {
        await prisma.user.delete({ where: { user_id: parseInt(id) } });
        res.json({ message: "User deleted successfully" });
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.deleteUser = deleteUser;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        const comparisonPassword = bcrypt.compareSync(password, user.password);
        if (!comparisonPassword) {
            return res.status(401).json({ error: "Wrong password" });
        }
        const statusLoggedIn = await prisma.user.update({
            where: {
                email,
            },
            data: {
                status: "LOGGED_IN",
            },
        });
        if (!statusLoggedIn) {
            return (0, response_helper_1.InternalServerError)("Error", res, req);
        }
        const token = (0, auth_service_1.jwtSign)(user);
        return res.status(200).json({ code: 200, message: "success login", status: true, data: statusLoggedIn, token });
    }
    catch (error) {
        console.log(error);
        return (0, response_helper_1.InternalServerError)(error, res, req);
    }
};
exports.login = login;
const logout = async (req, res) => {
    try {
        const logout = await prisma.user.update({
            where: {
                user_id: Number(req.params.id),
            },
            data: {
                status: "LOGGED_OUT",
            },
        });
        return res.status(200).json({
            code: 200,
            message: "Success Logged Out",
            success: true,
            data: logout,
        });
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.logout = logout;
