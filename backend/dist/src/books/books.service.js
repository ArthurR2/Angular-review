"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const book_1 = require("./dto/book");
let BooksService = class BooksService {
    /**
     * Books service constructor
     *
     * @param $prisma The Prisma database service
     */
    constructor($prisma) {
        this.$prisma = $prisma;
    }
    /**
     * Find a single Book in the `books` table
     *
     * @param bookWhereUniqueInput Input which specifies the book to be found
     */
    async findOne(params) {
        const { where, select } = params;
        let averageRating = false;
        // @ts-ignore
        if (select?.averageRating) {
            averageRating = true;
            // @ts-ignore
            delete select.averageRating;
        }
        const dbBook = await this.$prisma.book.findUnique({
            where,
            select
        });
        if (!dbBook) {
            throw new common_1.NotFoundException('The requested book could not be found');
        }
        let book = new book_1.Book(dbBook);
        if (averageRating) {
            const aggregate = await this.$prisma.review.aggregate({
                where: {
                    bookId: book.id
                },
                avg: {
                    value: true
                }
            });
            book = Object.assign({ averageRating: aggregate.avg.value }, book);
        }
        return book;
    }
    /**
     * Finds all Book records which match the given parameters
     *
     * @param params Parameters to match against the `books` table entries
     */
    async findAll(params) {
        const { skip, take, cursor, where, orderBy, select } = params;
        let averageRating = false;
        // @ts-ignore
        if (select?.averageRating) {
            averageRating = true;
            // @ts-ignore
            delete select.averageRating;
        }
        let books = await this.$prisma.book.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            select
        }) || [];
        for (let idx in books) {
            let book = new book_1.Book(books[idx]);
            if (averageRating) {
                const aggregate = await this.$prisma.review.aggregate({
                    where: {
                        bookId: book.id
                    },
                    avg: {
                        value: true
                    }
                });
                book.averageRating = aggregate.avg.value;
            }
            books[idx] = book;
        }
        return books;
    }
    /**
     * Create a new Book in the `books` table
     *
     * @param data The Book data to be created
     */
    async create(data) {
        return this.$prisma.book.create({ data });
    }
    /**
     * Updates a Book in the `books` table
     *
     * @param params Updated Book data
     */
    async update(params) {
        const { where, data } = params;
        return this.$prisma.book.update({ data, where });
    }
    /**
     * Removes a Book entry from the `books` table
     *
     * @param where The unique identifier(s) of the Book to be removed
     */
    async delete(where) {
        return this.$prisma.book.delete({ where });
    }
    /**
     * Counts the books in the database
     *
     * @param params
     * @returns
     */
    async count(params) {
        const { where, cursor, skip, orderBy } = params;
        let count = await this.$prisma.book.count({
            where,
            cursor,
            skip,
            orderBy
        });
        if (!count) {
            count = 0;
        }
        return count;
    }
};
BooksService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BooksService);
exports.BooksService = BooksService;
