"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const book_1 = require("../books/dto/book");
const prisma_service_1 = require("../prisma/prisma.service");
const author_1 = require("./dto/author");
let AuthorsService = class AuthorsService {
    /**
     * Authors service constructor
     * @param $prisma The Prisma database service
     */
    constructor($prisma) {
        this.$prisma = $prisma;
    }
    /**
     * Find a single Author in the `authors` table
     *
     * @param params Parametes to match against the requested `authors` table entry
     */
    async findOne(params) {
        const { where, select } = params;
        const dbAuthor = await this.$prisma.author.findUnique({
            where,
            select
        });
        if (!dbAuthor) {
            throw new common_1.NotFoundException('The requested author could not be found');
        }
        let author = new author_1.Author(dbAuthor);
        if (select?.books) {
            for (const idx in author.books) {
                author.books[idx] = new book_1.Book(author.books[idx]);
                const bookId = author.books[idx].id;
                const aggregate = await this.$prisma.review.aggregate({
                    where: {
                        bookId: bookId
                    },
                    avg: {
                        value: true
                    }
                });
                author.books[idx].averageRating = aggregate.avg.value;
            }
        }
        return author;
    }
    /**
     * Find all Author records which match the given parameters
     *
     * @param params Parameters to match against the `authors` table entries
     */
    async findAll(params) {
        let authors = await this.$prisma.author.findMany(params);
        for (const idx in authors) {
            let author = new author_1.Author(authors[idx]);
            if (params.select?.books) {
                for (const idx in author?.books) {
                    let book = new book_1.Book(author.books[idx]);
                    const aggregate = await this.$prisma.review.aggregate({
                        where: {
                            bookId: book.id
                        },
                        avg: {
                            value: true
                        }
                    });
                    book.averageRating = aggregate.avg.value;
                    author.books[idx] = book;
                }
            }
            authors[idx] = author;
        }
        return authors;
    }
    /**
     * Create a new Author in the `authors` table
     *
     * @param data The Author data to be created
     */
    async create(data) {
        return await this.$prisma.author.create({ data });
    }
    /**
     * Updates an Author in the `author` table
     *
     * @param params Updated Author data
     */
    async update(params) {
        return this.$prisma.author.update(params);
    }
    /**
     * Removes an Author from the `authors` table
     *
     * @param where The unique identifier(s) of teh Author to be removed
     */
    async delete(where) {
        return this.$prisma.author.delete({ where });
    }
};
AuthorsService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthorsService);
exports.AuthorsService = AuthorsService;
