"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciesGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const check_policies_decorator_1 = require("./check-policies.decorator");
const casl_ability_factory_1 = require("./casl-ability.factory");
let PoliciesGuard = class PoliciesGuard {
    constructor($reflector, $caslAbilityFactory) {
        this.$reflector = $reflector;
        this.$caslAbilityFactory = $caslAbilityFactory;
    }
    async canActivate(ctx) {
        const handlers = this.$reflector.get(check_policies_decorator_1.CHECK_POLICIES_KEY, ctx.getHandler()) || [];
        const { user } = ctx.switchToHttp().getRequest();
        const ability = this.$caslAbilityFactory.createForUser(user);
        return handlers.every((handler) => {
            return this.execPolicyHandler(handler, ability);
        });
    }
    execPolicyHandler(handler, ability) {
        if (typeof handler === 'function') {
            return handler(ability);
        }
        return handler.handle(ability);
    }
};
PoliciesGuard = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [core_1.Reflector,
        casl_ability_factory_1.CaslAbilityFactory])
], PoliciesGuard);
exports.PoliciesGuard = PoliciesGuard;
