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
const cart_1 = __importDefault(require("cart")); // Assuming ICart is defined in a separate file
const menu_1 = __importDefault(require("menu")); // Assuming IMenu is defined in a separate file
class CreateCartItemDTO {
    cart_item_id;
    cart;
    cart_id;
    menu;
    menu_id;
    subtotal;
    quantity;
    price_per_item;
    constructor(cart_item_id, cart, cart_id, menu, menu_id, subtotal, quantity, price_per_item) {
        this.cart_item_id = cart_item_id;
        this.cart = cart;
        this.cart_id = cart_id;
        this.menu = menu;
        this.menu_id = menu_id;
        this.subtotal = subtotal;
        this.quantity = quantity;
        this.price_per_item = price_per_item;
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCartItemDTO.prototype, "cart_item_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => cart_1.default),
    __metadata("design:type", cart_1.default)
], CreateCartItemDTO.prototype, "cart", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCartItemDTO.prototype, "cart_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => menu_1.default),
    __metadata("design:type", menu_1.default)
], CreateCartItemDTO.prototype, "menu", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCartItemDTO.prototype, "menu_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCartItemDTO.prototype, "subtotal", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCartItemDTO.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCartItemDTO.prototype, "price_per_item", void 0);
exports.default = CreateCartItemDTO;
