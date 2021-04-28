"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const auth_service_1 = require("./auth.service");
const prisma_service_1 = require("../prisma/prisma.service");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    /**
     * JwtStrategey constructor
     *
     * @param $authService The Authentiacation service
     */
    constructor($configService, $authService, $prismaService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: $configService.get('JWT_SECRET')
        });
        this.$configService = $configService;
        this.$authService = $authService;
        this.$prismaService = $prismaService;
    }
    /**
     * Validates the JWT token
     *
     * @param payload the token to validate
     */
    async validate(payload) {
        return {
            id: payload.sub,
            email: payload.email,
            roles: payload.roles
        };
    }
};
JwtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService,
        auth_service_1.AuthService,
        prisma_service_1.PrismaService])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
