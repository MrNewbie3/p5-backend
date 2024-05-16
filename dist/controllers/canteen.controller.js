"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCanteen = exports.updateCanteen = exports.getCanteenById = exports.getAllCanteens = exports.createCanteen = void 0;
const client_1 = require("@prisma/client");
const response_helper_1 = require("../helper/response.helper");
const class_validator_1 = require("class-validator");
const canteen_dto_1 = __importDefault(require("../validation/canteen-dto"));
const prisma = new client_1.PrismaClient();
// Create a new canteen
const createCanteen = async (req, res) => {
    const { canteen_id, user, user_id, canteen_number, orders, Menu, image_url, payment_method, bank_account_number, last_seen } = req.body;
    const createCanteenDto = new canteen_dto_1.default(canteen_id, user, user_id, canteen_number, orders, Menu, image_url, payment_method, bank_account_number, last_seen);
    const errors = await (0, class_validator_1.validate)(createCanteenDto);
    if (errors.length > 0) {
        return res.status(400).json({ errors: errors.map((error) => Object.values(error.constraints)) });
    }
    try {
        const canteen = await prisma.canteen.create({
            data: {
                user_id,
                canteen_number,
                image_url,
                payment_method,
                bank_account_number,
                last_seen,
            },
        });
        res.json(canteen);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.createCanteen = createCanteen;
// Get all canteens
const getAllCanteens = async (req, res) => {
    try {
        const canteens = await prisma.canteen.findMany();
        res.json(canteens);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.getAllCanteens = getAllCanteens;
// Get canteen by ID
const getCanteenById = async (req, res) => {
    const { id } = req.params;
    try {
        const canteen = await prisma.canteen.findUnique({ where: { canteen_id: parseInt(id) } });
        if (!canteen) {
            return res.status(404).json({ error: "Canteen not found" });
        }
        res.json(canteen);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.getCanteenById = getCanteenById;
// Update canteen by ID
const updateCanteen = async (req, res) => {
    const { id } = req.params;
    const { user_id, canteen_number, image_url, payment_method, bank_account_number } = req.body;
    try {
        const updatedCanteen = await prisma.canteen.update({
            where: { canteen_id: parseInt(id) },
            data: {
                user_id,
                canteen_number,
                image_url,
                payment_method,
                bank_account_number,
            },
        });
        res.json(updatedCanteen);
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.updateCanteen = updateCanteen;
// Delete canteen by ID
const deleteCanteen = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.canteen.delete({ where: { canteen_id: parseInt(id) } });
        res.json({ message: "Canteen deleted successfully" });
    }
    catch (error) {
        return (0, response_helper_1.InternalServerError)("Error", res, req);
    }
};
exports.deleteCanteen = deleteCanteen;
