"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthor = exports.CreateAuthor = exports.Author = void 0;
const tslib_1 = require("tslib");
const mapped_types_1 = require("@nestjs/mapped-types");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const base_1 = require("../../dto/base");
class Author extends base_1.BaseDTO {
    constructor(merge) {
        super(merge);
    }
}
tslib_1.__decorate([
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", String)
], Author.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.IsAlphanumeric(),
    tslib_1.__metadata("design:type", String)
], Author.prototype, "firstName", void 0);
tslib_1.__decorate([
    class_validator_1.IsAlphanumeric(),
    tslib_1.__metadata("design:type", String)
], Author.prototype, "lastName", void 0);
tslib_1.__decorate([
    class_validator_1.IsAlphanumeric(),
    tslib_1.__metadata("design:type", Object)
], Author.prototype, "middleName", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Author.prototype, "description", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], Author.prototype, "createdAt", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], Author.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", Array)
], Author.prototype, "booksId", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDefined(),
    class_validator_1.IsArray(),
    tslib_1.__metadata("design:type", Object)
], Author.prototype, "books", void 0);
exports.Author = Author;
class CreateAuthor extends mapped_types_1.OmitType(Author, ['id', 'createdAt', 'updatedAt']) {
}
exports.CreateAuthor = CreateAuthor;
class UpdateAuthor extends mapped_types_1.PartialType(Author) {
}
exports.UpdateAuthor = UpdateAuthor;
