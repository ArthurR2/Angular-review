"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const review_1 = require("./dto/review");
let ReviewsService = class ReviewsService {
    /**
     * Reviews service constructor
     *
     * @param $prisma The Prisma database service
     */
    constructor($prisma) {
        this.$prisma = $prisma;
    }
    /**
     * Find a single Review in the `reviews` table
     *
     * @param reviewWhereUniqueInput
     */
    async findOne(params) {
        const { where, select } = params;
        const dbReview = await this.$prisma.review.findUnique({ where, select });
        let review;
        if (dbReview) {
            review = new review_1.Review(dbReview);
        }
        return review;
    }
    /**
     * Find all Review records which match the given parameters
     *
     * @param params Parameters to match against the `reviews` table entries
     */
    async findAll(params) {
        const { skip, take, cursor, where, orderBy, select } = params;
        let reviews = await this.$prisma.review.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            select
        });
        for (const review in reviews) {
            reviews[review] = new review_1.Review(reviews[review]);
        }
        return reviews;
    }
    /**
     * Create a new Review in the `reviews` table
     *
     * @param data The Review to be created
     */
    async create(data) {
        return this.$prisma.review.create({ data });
    }
    /**
     * Updates a Review in the `reviews` table
     *
     * @param params Updated Review data
     */
    async update(params) {
        const { where, data } = params;
        return this.$prisma.review.update({ data, where });
    }
    /**
     * Removes a Review entry from the `reviews` table
     *
     * @param where The unique identifier(s) of the Review to be removed
     */
    async delete(where) {
        return this.$prisma.review.delete({ where });
    }
};
ReviewsService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReviewsService);
exports.ReviewsService = ReviewsService;
