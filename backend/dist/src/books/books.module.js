"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const books_controller_1 = require("./books.controller");
const books_service_1 = require("./books.service");
const prisma_service_1 = require("../prisma/prisma.service");
const utility_service_1 = require("../utility/utility.service");
const casl_ability_factory_1 = require("../auth/casl-ability.factory");
let BooksModule = class BooksModule {
};
BooksModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [books_controller_1.BooksController],
        providers: [
            books_service_1.BooksService,
            prisma_service_1.PrismaService,
            utility_service_1.UtilityService,
            casl_ability_factory_1.CaslAbilityFactory
        ]
    })
], BooksModule);
exports.BooksModule = BooksModule;
