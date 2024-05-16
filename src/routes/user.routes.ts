import express from "express";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser, login, logout } from "../controllers/user.controller";
import { authenticateToken } from "../services/auth.service";

const router = express.Router();

router.post("/", createUser);

router.get("/", authenticateToken, getAllUsers);

router.get("/:id", getUserById);

router.put("/:id", authenticateToken, updateUser);

router.delete("/:id", authenticateToken, deleteUser);

router.post("/login", login);

router.post("/logout/:id", authenticateToken, logout);

export default router;
