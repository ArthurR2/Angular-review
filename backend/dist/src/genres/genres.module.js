"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenresModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const casl_ability_factory_1 = require("../auth/casl-ability.factory");
const prisma_service_1 = require("../prisma/prisma.service");
const utility_service_1 = require("../utility/utility.service");
const genres_controller_1 = require("./genres.controller");
const genres_service_1 = require("./genres.service");
let GenresModule = class GenresModule {
};
GenresModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [genres_controller_1.GenresController],
        providers: [
            prisma_service_1.PrismaService,
            genres_service_1.GenresService,
            utility_service_1.UtilityService,
            casl_ability_factory_1.CaslAbilityFactory
        ]
    })
], GenresModule);
exports.GenresModule = GenresModule;
