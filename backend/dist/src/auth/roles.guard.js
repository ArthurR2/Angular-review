"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const roles_decorator_1 = require("../roles.decorator");
let RolesGuard = class RolesGuard {
    /**
     * Roles Guard constructor
     *
     * @param $reflector
     */
    constructor($reflector) {
        this.$reflector = $reflector;
    }
    /** @inheritdoc */
    canActivate(ctx) {
        const requiredRoles = this.$reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            ctx.getHandler(),
            ctx.getClass()
        ]);
        if (!requiredRoles) {
            return true;
        }
        const { user } = ctx.switchToHttp().getRequest();
        return requiredRoles.some((role) => {
            return user.roles.some((elem) => {
                return (elem.name.toLowerCase() === role);
            });
        });
    }
};
RolesGuard = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [core_1.Reflector])
], RolesGuard);
exports.RolesGuard = RolesGuard;
