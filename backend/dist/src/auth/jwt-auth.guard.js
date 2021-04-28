"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const passport_1 = require("@nestjs/passport");
const public_decorator_1 = require("../public.decorator");
let JwtAuthGuard = class JwtAuthGuard extends passport_1.AuthGuard('jwt') {
    /**
     * JWT Auth Guard constructor
     *
     * @param $reflector
     */
    constructor($reflector) {
        super();
        this.$reflector = $reflector;
    }
    // /** @inheritdoc */
    canActivate(ctx) {
        const isPublic = this.$reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            ctx.getHandler(),
            ctx.getClass()
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(ctx);
    }
};
JwtAuthGuard = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [core_1.Reflector])
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
