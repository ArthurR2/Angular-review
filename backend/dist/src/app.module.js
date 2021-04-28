"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const redisStore = tslib_1.__importStar(require("cache-manager-redis-store"));
const app_controller_1 = require("./app.controller");
const prisma_service_1 = require("./prisma/prisma.service");
const books_module_1 = require("./books/books.module");
const auth_module_1 = require("./auth/auth.module");
const reviews_module_1 = require("./reviews/reviews.module");
const users_module_1 = require("./users/users.module");
const encryption_service_1 = require("./encryption/encryption.service");
const utility_service_1 = require("./utility/utility.service");
const authors_module_1 = require("./authors/authors.module");
const genres_module_1 = require("./genres/genres.module");
const roles_guard_1 = require("./auth/roles.guard");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true
            }),
            common_1.CacheModule.register({
                store: redisStore,
                host: 'redis-cache',
                port: 6379,
                max: 50
            }),
            auth_module_1.AuthModule,
            books_module_1.BooksModule,
            reviews_module_1.ReviewsModule,
            users_module_1.UsersModule,
            authors_module_1.AuthorsModule,
            genres_module_1.GenresModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            prisma_service_1.PrismaService,
            encryption_service_1.EncryptionService,
            utility_service_1.UtilityService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: common_1.CacheInterceptor
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
