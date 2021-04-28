"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class ShoppingCart {
}
tslib_1.__decorate([
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", String)
], ShoppingCart.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], ShoppingCart.prototype, "userId", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDefined(),
    tslib_1.__metadata("design:type", Object)
], ShoppingCart.prototype, "books", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], ShoppingCart.prototype, "createdAt", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], ShoppingCart.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Object)
], ShoppingCart.prototype, "user", void 0);
exports.ShoppingCart = ShoppingCart;
