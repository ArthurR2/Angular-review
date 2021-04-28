"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = exports.CreateUser = exports.User = void 0;
const tslib_1 = require("tslib");
const mapped_types_1 = require("@nestjs/mapped-types");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const base_1 = require("../../dto/base");
class User extends base_1.BaseDTO {
    constructor(merge) {
        super(merge);
    }
}
tslib_1.__decorate([
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "middleName", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "nickName", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "profilePicture", void 0);
tslib_1.__decorate([
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "roles", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
exports.User = User;
class CreateUser extends mapped_types_1.OmitType(User, [
    'id',
    'roles',
    'createdAt',
    'updatedAt',
]) {
}
exports.CreateUser = CreateUser;
class UpdateUser extends mapped_types_1.PartialType(User) {
}
exports.UpdateUser = UpdateUser;
