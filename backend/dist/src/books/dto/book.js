"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBook = exports.CreateBook = exports.Book = void 0;
const tslib_1 = require("tslib");
const mapped_types_1 = require("@nestjs/mapped-types");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const base_1 = require("../../dto/base");
class Book extends base_1.BaseDTO {
    constructor(merge) {
        super(merge);
    }
}
tslib_1.__decorate([
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsPositive(),
    tslib_1.__metadata("design:type", Number)
], Book.prototype, "isbn", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "description", void 0);
tslib_1.__decorate([
    class_validator_1.IsDecimal(),
    class_validator_1.IsCurrency(),
    class_validator_1.IsPositive(),
    tslib_1.__metadata("design:type", Number)
], Book.prototype, "price", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsPositive(),
    tslib_1.__metadata("design:type", Number)
], Book.prototype, "publishYear", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsUrl(),
    tslib_1.__metadata("design:type", Object)
], Book.prototype, "coverUrl", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDataURI(),
    tslib_1.__metadata("design:type", Object)
], Book.prototype, "coverDataUri", void 0);
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsPositive(),
    tslib_1.__metadata("design:type", Number)
], Book.prototype, "sold", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], Book.prototype, "createdAt", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], Book.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    class_validator_1.IsPositive(),
    tslib_1.__metadata("design:type", Object)
], Book.prototype, "averageRating", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", Object)
], Book.prototype, "transactionId", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", Object)
], Book.prototype, "shoppingCartId", void 0);
tslib_1.__decorate([
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "publisherId", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDefined(),
    tslib_1.__metadata("design:type", Object)
], Book.prototype, "reviews", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDefined(),
    tslib_1.__metadata("design:type", Object)
], Book.prototype, "publisher", void 0);
exports.Book = Book;
class CreateBook extends mapped_types_1.OmitType(Book, [
    'createdAt',
    'updatedAt',
    'shoppingCartId',
    'reviews',
    'publisher',
    'transactionId',
    'averageRating'
]) {
}
exports.CreateBook = CreateBook;
class UpdateBook extends mapped_types_1.PartialType(Book) {
}
exports.UpdateBook = UpdateBook;
