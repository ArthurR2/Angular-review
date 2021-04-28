"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = exports.BrowserError = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
const pkg = tslib_1.__importStar(require("../package.json"));
const public_decorator_1 = require("./public.decorator");
class BrowserError {
}
exports.BrowserError = BrowserError;
let AppController = class AppController {
    constructor($prismaService) {
        this.$prismaService = $prismaService;
    }
    /**
     * Root GET method. Returns basic information about the API
     */
    async getRoot() {
        const authors = [pkg.author, ...pkg.contributors];
        return {
            apiVersion: pkg.version,
            authors: authors,
            license: pkg.license,
            homepage: pkg.homepage
        };
    }
    /**
     * POST method for adding logging information to the database.
     * @param messageBody
     */
    async logError(messageBody) {
        this.$prismaService.log.create({
            data: {
                name: messageBody.name,
                message: messageBody.message,
                createdAt: messageBody.createdAt
            }
        });
    }
};
tslib_1.__decorate([
    common_1.Get(),
    public_decorator_1.Public(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getRoot", null);
tslib_1.__decorate([
    common_1.Post('logs'),
    public_decorator_1.Public(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BrowserError]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "logError", null);
AppController = tslib_1.__decorate([
    common_1.Controller(''),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppController);
exports.AppController = AppController;
