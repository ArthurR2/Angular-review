"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const utility_service_1 = require("../utility/utility.service");
const public_decorator_1 = require("../public.decorator");
const parse_frontend_btoa_pipe_1 = require("../parse-frontend-btoa.pipe");
const parse_int_pipe_1 = require("../parse-int.pipe");
const policies_guard_1 = require("../auth/policies.guard");
const check_policies_decorator_1 = require("../auth/check-policies.decorator");
const casl_ability_factory_1 = require("../auth/casl-ability.factory");
const authors_service_1 = require("./authors.service");
const author_1 = require("./dto/author");
let AuthorsController = class AuthorsController {
    /**
     * Authors controller constructor
     *
     * @param $authorsService
     * @param $utilityService
     */
    constructor($authorsService, $utilityService) {
        this.$authorsService = $authorsService;
        this.$utilityService = $utilityService;
    }
    /**
     * GET request to find all records in the `authors` table.
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
        return this.$authorsService.findAll(query);
    }
    /**
     * Get request to find a User by a string UUID
     *
     * @param id The UUID of the requested User
     * @param select
     * @param include
     */
    async findOne(id, select) {
        const query = { where: { id: id }, select };
        return this.$authorsService.findOne(query);
    }
    /**
     * POST request to update an Author in the `authors` table
     *
     * @param postData The Author data to be created
     */
    async create(postData) {
        return this.$authorsService.create(postData);
    }
    /**
     * PUT request to update an Author in the `authors` table
     *
     * @param id The UUID of the Author to be updated
     * @param postData The updated information of the Author
     */
    async update(id, postData) {
        return this.$authorsService.update({
            where: { id: id },
            data: postData
        });
    }
    /**
     * DELETE request to remove an Author from the `authors` table
     *
     * @param id The UUID of the Author to be removed
     */
    async delete(id) {
        return this.$authorsService.delete({ id: id });
    }
};
tslib_1.__decorate([
    common_1.Get(),
    public_decorator_1.Public(),
    tslib_1.__param(0, common_1.Query('skip', parse_int_pipe_1.ParseIntPipe)),
    tslib_1.__param(1, common_1.Query('take', parse_int_pipe_1.ParseIntPipe)),
    tslib_1.__param(2, common_1.Query('cursor', parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe)),
    tslib_1.__param(3, common_1.Query('where', parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe)),
    tslib_1.__param(4, common_1.Query('orderBy', parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe)),
    tslib_1.__param(5, common_1.Query('select', parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Object, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorsController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    public_decorator_1.Public(),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__param(1, common_1.Query('select', parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorsController.prototype, "findOne", null);
tslib_1.__decorate([
    common_1.Post(''),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Create, author_1.Author)),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [author_1.CreateAuthor]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorsController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Update, author_1.Author)),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, author_1.UpdateAuthor]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorsController.prototype, "update", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Delete, author_1.Author)),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorsController.prototype, "delete", null);
AuthorsController = tslib_1.__decorate([
    common_1.Controller('authors'),
    tslib_1.__metadata("design:paramtypes", [authors_service_1.AuthorsService,
        utility_service_1.UtilityService])
], AuthorsController);
exports.AuthorsController = AuthorsController;
