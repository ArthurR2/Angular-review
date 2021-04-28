"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaslAbilityFactory = exports.Action = void 0;
const tslib_1 = require("tslib");
const ability_1 = require("@casl/ability");
const common_1 = require("@nestjs/common");
const review_1 = require("../reviews/dto/review");
const shopping_cart_1 = require("../shopping-cart/dto/shopping-cart");
const user_1 = require("../users/dto/user");
var Action;
(function (Action) {
    Action["Manage"] = "manage";
    Action["Create"] = "create";
    Action["Read"] = "read";
    Action["Update"] = "update";
    Action["Delete"] = "delete";
})(Action = exports.Action || (exports.Action = {}));
let CaslAbilityFactory = class CaslAbilityFactory {
    createForUser(user) {
        const { can, cannot, build } = new ability_1.AbilityBuilder(ability_1.Ability);
        const isAdmin = user.roles.some((role) => {
            return role.name === 'admin';
        });
        if (isAdmin) {
            can(Action.Manage, 'all');
        }
        else {
            can(Action.Read, 'all');
        }
        can(Action.Update, user_1.User, { id: user.id });
        can(Action.Create, review_1.Review, { userId: user.id });
        can(Action.Update, review_1.Review, { userId: user.id });
        can(Action.Delete, review_1.Review, { userId: user.id });
        can(Action.Create, shopping_cart_1.ShoppingCart, { userId: user.id });
        can(Action.Update, shopping_cart_1.ShoppingCart, { userId: user.id });
        can(Action.Delete, shopping_cart_1.ShoppingCart, { userId: user.id });
        return build({
            detectSubjectType: item => item.constructor
        });
    }
};
CaslAbilityFactory = tslib_1.__decorate([
    common_1.Injectable()
], CaslAbilityFactory);
exports.CaslAbilityFactory = CaslAbilityFactory;
