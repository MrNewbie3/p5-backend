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
const order_detail_1 = __importDefault(require("order_detail")); // Assuming IOrderDetail is defined in a separate file
const cart_item_1 = __importDefault(require("cart_item")); // Assuming ICartItem is defined in a separate file
class CreateMenuDTO {
    menu_id;
    canteen;
    canteen_id;
    name;
    slug;
    price;
    stock_amount;
    image_url;
    order_details;
    cart_items;
    constructor(menu_id, canteen, canteen_id, name, slug, price, stock_amount, order_details, cart_items, image_url) {
        this.menu_id = menu_id;
        this.canteen = canteen;
        this.canteen_id = canteen_id;
        this.name = name;
        this.slug = slug;
        this.price = price;
        this.stock_amount = stock_amount;
        this.image_url = image_url;
        this.order_details = order_details;
        this.cart_items = cart_items;
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateMenuDTO.prototype, "menu_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => canteen_1.default),
    __metadata("design:type", canteen_1.default)
], CreateMenuDTO.prototype, "canteen", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateMenuDTO.prototype, "canteen_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMenuDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMenuDTO.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateMenuDTO.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateMenuDTO.prototype, "stock_amount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMenuDTO.prototype, "image_url", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => order_detail_1.default),
    __metadata("design:type", Array)
], CreateMenuDTO.prototype, "order_details", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => cart_item_1.default),
    __metadata("design:type", Array)
], CreateMenuDTO.prototype, "cart_items", void 0);
exports.default = CreateMenuDTO;
