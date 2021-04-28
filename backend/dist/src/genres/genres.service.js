"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenresService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GenresService = class GenresService {
    /**
     * Genres service constructor
     * @param $prisma The Prisma database service
     */
    constructor($prisma) {
        this.$prisma = $prisma;
    }
    /**
     * Find a single Genre in the `genres` table
     *
     * @param params Parametes to match against the requested `genres` table entry
     */
    async findOne(params) {
        const { where, select } = params;
        const genre = await this.$prisma.genre.findUnique({ where, select });
        return genre;
    }
    /**
     * Find all Genre records which match the given parameters
     *
     * @param params Parameters to match against the `genres` table entries
     */
    async findAll(params) {
        const genres = await this.$prisma.genre.findMany(params);
        return genres;
    }
    /**
     * Create a new Genre in the `genres` table
     *
     * @param data The Genre data to be created
     */
    async create(data) {
        const genre = await this.$prisma.genre.create({ data });
        return genre;
    }
    /**
     * Updates an Genre in the `genre` table
     *
     * @param params Updated Genre data
     */
    async update(params) {
        const { where, data } = params;
        const genre = await this.$prisma.genre.update({ data, where });
        return genre;
    }
    /**
     * Removes an Genre from the `genres` table
     *
     * @param where The unique identifier(s) of teh Genre to be removed
     */
    async delete(where) {
        const genre = await this.$prisma.genre.delete({ where });
        return genre;
    }
};
GenresService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GenresService);
exports.GenresService = GenresService;
