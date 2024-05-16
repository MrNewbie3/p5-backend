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
const order_1 = __importDefault(require("order")); // Assuming IOrder is defined in a separate file
const menu_1 = __importDefault(require("menu")); // Assuming IMenu is defined in a separate file
class CreateOrderDetailDTO {
    order_detail_id;
    order;
    order_id;
    menu;
    menu_id;
    sub_total;
    quantity;
    constructor(order_detail_id, order, order_id, menu, menu_id, sub_total, quantity) {
        this.order_detail_id = order_detail_id;
        this.order = order;
        this.order_id = order_id;
        this.menu = menu;
        this.menu_id = menu_id;
        this.sub_total = sub_total;
        this.quantity = quantity;
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateOrderDetailDTO.prototype, "order_detail_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => order_1.default),
    __metadata("design:type", order_1.default)
], CreateOrderDetailDTO.prototype, "order", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateOrderDetailDTO.prototype, "order_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => menu_1.default),
    __metadata("design:type", menu_1.default)
], CreateOrderDetailDTO.prototype, "menu", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateOrderDetailDTO.prototype, "menu_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateOrderDetailDTO.prototype, "sub_total", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateOrderDetailDTO.prototype, "quantity", void 0);
exports.default = CreateOrderDetailDTO;
