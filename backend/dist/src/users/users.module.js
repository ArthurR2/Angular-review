"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const tslib_1 = require("tslib");
const utility_service_1 = require("./../utility/utility.service");
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
const prisma_service_1 = require("../prisma/prisma.service");
const casl_ability_factory_1 = require("../auth/casl-ability.factory");
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [users_controller_1.UsersController],
        providers: [
            prisma_service_1.PrismaService,
            users_service_1.UsersService,
            utility_service_1.UtilityService,
            casl_ability_factory_1.CaslAbilityFactory
        ],
        exports: [users_service_1.UsersService]
    })
], UsersModule);
exports.UsersModule = UsersModule;
