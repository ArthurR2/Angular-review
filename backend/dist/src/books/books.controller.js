"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const utility_service_1 = require("../utility/utility.service");
const public_decorator_1 = require("../public.decorator");
const parse_int_pipe_1 = require("../parse-int.pipe");
const parse_frontend_btoa_pipe_1 = require("../parse-frontend-btoa.pipe");
const casl_ability_factory_1 = require("../auth/casl-ability.factory");
const policies_guard_1 = require("../auth/policies.guard");
const check_policies_decorator_1 = require("../auth/check-policies.decorator");
const books_service_1 = require("./books.service");
const book_1 = require("./dto/book");
let BooksController = class BooksController {
    /**
     * Books controller constructor
     *
     * @param $booksService The database connection to the `books` table
     * @param $utilityService The application utility service
     */
    constructor($booksService, $utilityService) {
        this.$booksService = $booksService;
        this.$utilityService = $utilityService;
    }
    /**
     * GET request to find all records in the `books` table.
     *
     * @param skip
     * @param take
     * @param cursor
     * @param where
     * @param orderBy
     * @param select
     * @param include
     */
    async findAll(skip, take, cursor, where, orderBy, select) {
        const query = { skip, take, cursor, where, orderBy, select };
        const books = await this.$booksService.findAll(query);
        const count = await this.$booksService.count({ skip, cursor, where, orderBy });
        return {
            books,
            count
        };
    }
    /**
     * GET request to find a Book by a string UUID
     *
     * @param id
     * @param select
     * @param include
     */
    async findOne(id, select) {
        const query = { where: { id: id }, select };
        return this.$booksService.findOne(query);
    }
    /**
     * POST request to create a new Book in the `books` table
     *
     * @param postData The Book data to be created
     */
    async create(postData) {
        return this.$booksService.create(postData);
    }
    /**
     * PUT request to update a Book in the `books` table
     *
     * @param id The UUID of the Book to be updated
     * @param bookData The updated information of the Book
     */
    async update(id, postData) {
        return this.$booksService.update({
            where: { id: id },
            data: postData
        });
    }
    /**
     * DELETE request to remove a Book from the `books` table
     *
     * @param id The UUID of the Book to be removed
     */
    async delete(id) {
        return this.$booksService.delete({ id: id });
    }
};
tslib_1.__decorate([
    common_1.Get(),
    public_decorator_1.Public(),
    tslib_1.__param(0, common_1.Query('skip', parse_int_pipe_1.ParseIntPipe)),
    tslib_1.__param(1, common_1.Query('take', parse_int_pipe_1.ParseIntPipe)),
    tslib_1.__param(2, common_1.Query('cursor', new parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe())),
    tslib_1.__param(3, common_1.Query('where', new parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe())),
    tslib_1.__param(4, common_1.Query('orderBy', new parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe())),
    tslib_1.__param(5, common_1.Query('select', new parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe())),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Object, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    public_decorator_1.Public(),
    tslib_1.__param(0, common_1.Param('id', new common_1.ParseUUIDPipe())),
    tslib_1.__param(1, common_1.Query('select', parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksController.prototype, "findOne", null);
tslib_1.__decorate([
    common_1.Post(''),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Create, book_1.Book)),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Update, book_1.Book)),
    tslib_1.__param(0, common_1.Param('id', new common_1.ParseUUIDPipe())),
    tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, book_1.Book]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksController.prototype, "update", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Delete, book_1.Book)),
    tslib_1.__param(0, common_1.Param('id', new common_1.ParseUUIDPipe())),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksController.prototype, "delete", null);
BooksController = tslib_1.__decorate([
    common_1.Controller('books'),
    tslib_1.__metadata("design:paramtypes", [books_service_1.BooksService,
        utility_service_1.UtilityService])
], BooksController);
exports.BooksController = BooksController;
