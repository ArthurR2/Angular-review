"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReview = exports.CreateReview = exports.Review = void 0;
const tslib_1 = require("tslib");
const mapped_types_1 = require("@nestjs/mapped-types");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const base_1 = require("../../dto/base");
class Review extends base_1.BaseDTO {
    constructor(merge) {
        super(merge);
    }
}
tslib_1.__decorate([
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", String)
], Review.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsPositive(),
    tslib_1.__metadata("design:type", Number)
], Review.prototype, "value", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], Review.prototype, "description", void 0);
tslib_1.__decorate([
    class_validator_1.IsAlpha(),
    tslib_1.__metadata("design:type", String)
], Review.prototype, "postedAs", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], Review.prototype, "createdAt", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], Review.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", String)
], Review.prototype, "userId", void 0);
tslib_1.__decorate([
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", String)
], Review.prototype, "bookId", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Object)
], Review.prototype, "book", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Object)
], Review.prototype, "user", void 0);
exports.Review = Review;
class CreateReview extends mapped_types_1.OmitType(Review, [
    'createdAt',
    'updatedAt'
]) {
}
exports.CreateReview = CreateReview;
class UpdateReview extends mapped_types_1.PartialType(Review) {
}
exports.UpdateReview = UpdateReview;
