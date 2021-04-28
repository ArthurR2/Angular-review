"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const argon2_1 = tslib_1.__importDefault(require("argon2"));
const prisma_service_1 = require("../prisma/prisma.service");
/**
 *
 *
 * @export
 * @class AuthService
 */
let AuthService = class AuthService {
    /**
     * Auth service constructor
     *
     * @param $prisma Prisma database service
     */
    constructor($prisaService, $jwtService) {
        this.$prisaService = $prisaService;
        this.$jwtService = $jwtService;
    }
    /**
     * Validates a user against the database using BasicAuth
     *
     * @param email The user's email address
     * @param password The user's password
     */
    async validateUser(email, password) {
        const user = await this.$prisaService.user.findUnique({
            where: {
                email: email
            },
            select: {
                id: true,
                email: true,
                passwordHash: true,
                roles: true
            }
        });
        if (user?.passwordHash) {
            const isValid = await argon2_1.default.verify(user.passwordHash, password);
            if (isValid) {
                const { passwordHash, ...result } = user;
                return result;
            }
        }
        return null;
    }
    /**
     * Performs the login action for a user and
     * assigns them a valid JWT
     *
     * @param email The user's email address
     * @param password The user's password
     */
    async login(user) {
        const payload = {
            sub: user.id,
            email: user.email,
            roles: user.roles
        };
        return {
            accessToken: this.$jwtService.sign(payload),
            userId: user.id
        };
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
