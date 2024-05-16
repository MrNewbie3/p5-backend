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
const notifications_1 = __importDefault(require("notifications")); // Assuming INotifications is defined in a separate file
class CreateNotificationDetailDTO {
    notification_detail_id;
    notifications;
    notification_id;
    message;
    headline;
    created_at;
    constructor(notification_detail_id, notifications, notification_id, message, headline, created_at) {
        this.notification_detail_id = notification_detail_id;
        this.notifications = notifications;
        this.notification_id = notification_id;
        this.message = message;
        this.headline = headline;
        this.created_at = created_at;
    }
}
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateNotificationDetailDTO.prototype, "notification_detail_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => notifications_1.default),
    __metadata("design:type", notifications_1.default)
], CreateNotificationDetailDTO.prototype, "notifications", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateNotificationDetailDTO.prototype, "notification_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotificationDetailDTO.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotificationDetailDTO.prototype, "headline", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateNotificationDetailDTO.prototype, "created_at", void 0);
exports.default = CreateNotificationDetailDTO;
