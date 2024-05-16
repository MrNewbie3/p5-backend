"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartHandlerRoutes = exports.OrderHandlerRoutes = exports.NotificationsHandlerRoutes = exports.CanteenHandlerRoutes = exports.UserHandlerRoutes = void 0;
// Import routes
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const canteen_routes_1 = __importDefault(require("../routes/canteen.routes"));
const notifications_routes_1 = __importDefault(require("../routes/notifications.routes"));
const order_routes_1 = __importDefault(require("../routes/order.routes"));
const cart_routes_1 = __importDefault(require("../routes/cart.routes"));
// Export routes
exports.UserHandlerRoutes = user_routes_1.default;
exports.CanteenHandlerRoutes = canteen_routes_1.default;
exports.NotificationsHandlerRoutes = notifications_routes_1.default;
exports.OrderHandlerRoutes = order_routes_1.default;
exports.CartHandlerRoutes = cart_routes_1.default;
