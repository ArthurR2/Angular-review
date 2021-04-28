"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const argon2_1 = tslib_1.__importDefault(require("argon2"));
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    /**
   * Users service constructor
   *
   * @param $prisma The Prisma database service
   */
    constructor($prisma) {
        this.$prisma = $prisma;
    }
    /**
     * Find a single User in the `users` table
     *
     * @param userWhereInput Input which specifies the book to be found
     */
    async findOne(params) {
        const { where, select } = params;
        let user = await this.$prisma.user.findFirst({ where, select });
        if (user) {
            // @ts-ignore
            delete user.passwordHash;
        }
        return user;
    }
    /**
     * Finds all User records which match the given parameters
     *
     * @param params Parameters to match against the `users` table entries
     */
    async findAll(params) {
        let { skip, take, cursor, where, orderBy, select } = params;
        const users = await this.$prisma.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            select
        });
        for (let user of users) {
            // @ts-ignore
            delete user.passwordHash;
        }
        return users;
    }
    /**
     * Create a new User in the `users` table
     *
     * @param data The User data to be created
     */
    async create(data) {
        let passwordHash = await argon2_1.default.hash(data.password);
        const newUser = {
            email: data.email,
            passwordHash: passwordHash,
            firstName: data.firstName,
            middleName: data.middleName || '',
            lastName: data.lastName,
            nickName: data.nickName
        };
        let user = await this.$prisma.user.create({ data: {
                ...newUser,
                roles: {
                    connect: {
                        name: 'user'
                    }
                }
            }
        });
        if (user) {
            // @ts-ignore
            delete user.passwordHash;
        }
        return user;
    }
    /**
     * Updates a User in the `users` table
     *
     * @param params Updated User data
     */
    async update(params) {
        const { where, data } = params;
        if (data.passwordHash) {
            data.passwordHash = await argon2_1.default.hash(data.passwordHash);
        }
        let user = await this.$prisma.user.update({
            data,
            where
        });
        if (user) {
            // @ts-ignore
            delete user.passwordHash;
        }
        return user;
    }
    /**
     * Removes a User entry from the `users` table
     *
     * @param where The unique identifier(s) of the User to be removed
     */
    async delete(where) {
        let user = await this.$prisma.user.delete({
            where
        });
        if (user) {
            // @ts-ignore
            delete user.passwordHash;
        }
        return user;
    }
};
UsersService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
