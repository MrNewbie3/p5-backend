"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const auth_service_1 = require("../services/auth.service");
const router = express_1.default.Router();
router.post("/", user_controller_1.createUser);
router.get("/", auth_service_1.authenticateToken, user_controller_1.getAllUsers);
router.get("/:id", auth_service_1.authenticateToken, user_controller_1.getUserById);
router.put("/:id", auth_service_1.authenticateToken, user_controller_1.updateUser);
router.delete("/:id", auth_service_1.authenticateToken, user_controller_1.deleteUser);
router.post("/login", auth_service_1.authenticateToken, user_controller_1.login);
router.post("/logout/:id", auth_service_1.authenticateToken, user_controller_1.logout);
exports.default = router;
