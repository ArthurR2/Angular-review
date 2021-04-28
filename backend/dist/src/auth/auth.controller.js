"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const public_decorator_1 = require("../public.decorator");
const auth_service_1 = require("./auth.service");
const local_auth_guard_1 = require("./local-auth.guard");
let AuthController = class AuthController {
    /**
     * Auth controller constructor
     *
     * @param $authService The Authentication service
     */
    constructor($authService) {
        this.$authService = $authService;
    }
    /**
     * Logs a user in to the application using BasicAuth
     *
     * @param email The user's email
     * @param password The user's password
     */
    async login(req) {
        return this.$authService.login(req.user);
    }
    /**
     * @TODO
     * Refreshes an expired but valid JWT if the expiration occurs within a set time period.
     */
    async refreshToken() {
    }
};
tslib_1.__decorate([
    common_1.Post('login'),
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    public_decorator_1.Public(),
    common_1.HttpCode(200),
    tslib_1.__param(0, common_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
tslib_1.__decorate([
    common_1.Post('refresh-token'),
    public_decorator_1.Public(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
AuthController = tslib_1.__decorate([
    common_1.Controller('auth'),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
