"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const users_module_1 = require("../users/users.module");
const jwt_strategy_1 = require("./jwt.strategy");
const local_strategy_1 = require("./local.strategy");
const prisma_service_1 = require("../prisma/prisma.service");
const casl_ability_factory_1 = require("./casl-ability.factory");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule,
            passport_1.PassportModule.register({
                session: false
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async ($configService) => ({
                    secret: $configService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: '7200s'
                    }
                })
            }),
            users_module_1.UsersModule
        ],
        providers: [
            prisma_service_1.PrismaService,
            auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            casl_ability_factory_1.CaslAbilityFactory
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService, jwt_1.JwtModule, casl_ability_factory_1.CaslAbilityFactory]
    })
], AuthModule);
exports.AuthModule = AuthModule;
