import express, { Application, Request, Response } from "express";
import * as fs from "fs";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { UserHandlerRoutes, CanteenHandlerRoutes, CartHandlerRoutes, NotificationsHandlerRoutes, OrderHandlerRoutes } from "./models/export.model";
import bodyParser from "body-parser";
import { authenticateToken } from "./services/auth.service";
import { Server } from "socket.io";
import { createServer } from "http";

dotenv.config();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({
  extended: false,
});

const app: Application = express();
const port = process.env.PORT;
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {});

app.use(jsonParser);
app.use(urlEncodedParser);
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

app.use("/api/v1/user", UserHandlerRoutes);
app.use("/api/v1/canteen", CanteenHandlerRoutes);
app.use("/api/v1/cart", CartHandlerRoutes);
app.use("/api/v1/notifications", NotificationsHandlerRoutes);
app.use("/api/v1/order", OrderHandlerRoutes);

app.get("/", (req, res) => {
  console.log(req.headers["user-agent"]);
  return res.send("Hello");
});

httpServer.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
