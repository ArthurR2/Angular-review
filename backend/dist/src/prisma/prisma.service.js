"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    /**
     * Prisma service constructor
     */
    constructor() {
        super();
    }
    /**
     * Initiate a database connection upon initialization of the module
     */
    async onModuleInit() {
        await this.$connect();
    }
    /**
     * Close all active database connections upon destruction of the module
     */
    async onModuleDestroy() {
        await this.$disconnect();
    }
    /**
     * Close all active databse connections upon application shutdown
     * @param signal
     */
    async onApplicationShutdown(signal) {
        await this.$disconnect();
    }
};
PrismaService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], PrismaService);
exports.PrismaService = PrismaService;
