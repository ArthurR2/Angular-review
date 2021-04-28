"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const authors_controller_1 = require("./authors.controller");
const authors_service_1 = require("./authors.service");
const prisma_service_1 = require("../prisma/prisma.service");
const utility_service_1 = require("../utility/utility.service");
const casl_ability_factory_1 = require("../auth/casl-ability.factory");
let AuthorsModule = class AuthorsModule {
};
AuthorsModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [authors_controller_1.AuthorsController],
        providers: [
            authors_service_1.AuthorsService,
            prisma_service_1.PrismaService,
            utility_service_1.UtilityService,
            casl_ability_factory_1.CaslAbilityFactory
        ]
    })
], AuthorsModule);
exports.AuthorsModule = AuthorsModule;
