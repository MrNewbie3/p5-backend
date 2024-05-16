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
const user_1 = __importDefault(require("../../@types/user")); // Assuming IUser is defined in a separate file
const order_1 = __importDefault(require("../../@types/order")); // Assuming IOrder is defined in a separate file
const menu_1 = __importDefault(require("../../@types/menu")); // Assuming IMenu is defined in a separate file
class CreateCanteenDTO {
    canteen_id;
    user;
    user_id;
    canteen_number;
    image_url;
    payment_method;
    bank_account_number;
    last_seen;
    orders;
    Menu;
    constructor(canteen_id, user, user_id, canteen_number, orders, Menu, image_url, payment_method, bank_account_number, last_seen) {
        this.canteen_id = canteen_id;
        this.user = user;
        this.user_id = user_id;
        this.canteen_number = canteen_number;
        this.orders = orders;
        this.Menu = Menu;
        this.image_url = image_url;
        this.payment_method = payment_method;
        this.bank_account_number = bank_account_number;
        this.last_seen = last_seen;
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCanteenDTO.prototype, "canteen_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => user_1.default),
    __metadata("design:type", user_1.default)
], CreateCanteenDTO.prototype, "user", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCanteenDTO.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCanteenDTO.prototype, "canteen_number", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCanteenDTO.prototype, "image_url", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCanteenDTO.prototype, "payment_method", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCanteenDTO.prototype, "bank_account_number", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateCanteenDTO.prototype, "last_seen", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => order_1.default),
    __metadata("design:type", Array)
], CreateCanteenDTO.prototype, "orders", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => menu_1.default),
    __metadata("design:type", Array)
], CreateCanteenDTO.prototype, "Menu", void 0);
exports.default = CreateCanteenDTO;
