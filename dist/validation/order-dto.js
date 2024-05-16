"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const canteen_1 = __importDefault(require("canteen")); // Assuming ICanteen is defined in a separate file
const user_1 = __importDefault(require("@types/user")); // Assuming IUser is defined in a separate file
const order_detail_1 = __importDefault(require("order_detail")); // Assuming IOrderDetail is defined in a separate file
const client_1 = require("@prisma/client");
class CreateOrderDto {
    order_id;
    canteen;
    canteen_id;
    user;
    user_id;
    payment_method;
    payment_method_provider;
    amount_total;
    fee;
    status;
    process_status;
    payment_status;
    created_at;
    order_details;
    constructor(order_id, canteen, canteen_id, user, user_id, payment_method, payment_method_provider, amount_total, fee, status, process_status, payment_status, created_at, order_details) {
        this.order_id = order_id;
        this.canteen = canteen;
        this.canteen_id = canteen_id;
        this.user = user;
        this.user_id = user_id;
        this.payment_method = payment_method;
        this.payment_method_provider = payment_method_provider;
        this.amount_total = amount_total;
        this.fee = fee;
        this.status = status;
        this.process_status = process_status;
        this.payment_status = payment_status;
        this.created_at = created_at;
        this.order_details = order_details;
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "order_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => canteen_1.default),
    __metadata("design:type", canteen_1.default)
], CreateOrderDto.prototype, "canteen", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "canteen_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => user_1.default),
    __metadata("design:type", user_1.default)
], CreateOrderDto.prototype, "user", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.Payment),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "payment_method", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "payment_method_provider", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "amount_total", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "fee", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.OrderStatus),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.OrderStatus),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "process_status", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.PaymentStatus),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "payment_status", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateOrderDto.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => order_detail_1.default),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "order_details", void 0);
exports.default = CreateOrderDto;
