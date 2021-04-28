"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsModule = void 0;
const tslib_1 = require("tslib");
const utility_service_1 = require("./../utility/utility.service");
const common_1 = require("@nestjs/common");
const reviews_controller_1 = require("./reviews.controller");
const reviews_service_1 = require("./reviews.service");
const prisma_service_1 = require("../prisma/prisma.service");
const casl_ability_factory_1 = require("../auth/casl-ability.factory");
let ReviewsModule = class ReviewsModule {
};
ReviewsModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [reviews_controller_1.ReviewsController],
        providers: [
            prisma_service_1.PrismaService,
            reviews_service_1.ReviewsService,
            utility_service_1.UtilityService,
            casl_ability_factory_1.CaslAbilityFactory
        ]
    })
], ReviewsModule);
exports.ReviewsModule = ReviewsModule;
