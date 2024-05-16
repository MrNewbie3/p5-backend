"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const export_model_1 = require("./models/export.model");
const body_parser_1 = __importDefault(require("body-parser"));
const auth_service_1 = require("./services/auth.service");
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const port = process.env.PORT;
const jsonParser = body_parser_1.default.json();
const urlEncodedParser = body_parser_1.default.urlencoded({
    extended: false,
});
app.use(jsonParser);
app.use(urlEncodedParser);
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));
app.use("/api/v1/user", export_model_1.UserHandlerRoutes);
app.use("/api/v1/canteen", auth_service_1.authenticateToken, export_model_1.CanteenHandlerRoutes);
app.use("/api/v1/cart", auth_service_1.authenticateToken, export_model_1.CartHandlerRoutes);
app.use("/api/v1/notifications", auth_service_1.authenticateToken, export_model_1.NotificationsHandlerRoutes);
app.use("/api/v1/order", auth_service_1.authenticateToken, export_model_1.OrderHandlerRoutes);
app.get("/", (req, res) => {
    return res.send("Hello");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
