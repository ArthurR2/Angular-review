"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGenre = exports.CreateGenre = exports.Genre = void 0;
const tslib_1 = require("tslib");
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
const base_1 = require("../../dto/base");
class Genre extends base_1.BaseDTO {
    constructor(merge) {
        super(merge);
    }
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsPositive(),
    tslib_1.__metadata("design:type", Number)
], Genre.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Genre.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], Genre.prototype, "createdAt", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], Genre.prototype, "updatedAt", void 0);
exports.Genre = Genre;
class CreateGenre extends mapped_types_1.OmitType(Genre, [
    'id',
    'createdAt',
    'updatedAt'
]) {
}
exports.CreateGenre = CreateGenre;
class UpdateGenre extends mapped_types_1.PartialType(Genre) {
}
exports.UpdateGenre = UpdateGenre;
