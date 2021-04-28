"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenresController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const utility_service_1 = require("../utility/utility.service");
const public_decorator_1 = require("../public.decorator");
const parse_int_pipe_1 = require("../parse-int.pipe");
const parse_frontend_btoa_pipe_1 = require("../parse-frontend-btoa.pipe");
const policies_guard_1 = require("../auth/policies.guard");
const check_policies_decorator_1 = require("../auth/check-policies.decorator");
const casl_ability_factory_1 = require("../auth/casl-ability.factory");
const genres_service_1 = require("./genres.service");
const genre_1 = require("./dto/genre");
let GenresController = class GenresController {
    /**
   * Genres controller constructor
   *
   * @param $genresService
   * @param $utilityService
   */
    constructor($genresService, $utilityService) {
        this.$genresService = $genresService;
        this.$utilityService = $utilityService;
    }
    /**
     * GET request to all records in the `genres` table.
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
        return this.$genresService.findAll(query);
    }
    /**
     * GET request to find a Genre by an id
     *
     * @param id Id of the Genre to be found
     * @param include
     */
    async findOne(id, select) {
        const query = { where: { id: id }, select };
        return this.$genresService.findOne(query);
    }
    /**
     * POST request to create a new Genre in the `genres` table
     *
     * @param postData The Genre to be created
     */
    async create(postData) {
        return this.$genresService.create(postData);
    }
    /**
     * PUT request to update a Genre in the `genres` table
     *
     * @param id The Id of the Genre to be updated
     * @param postData The updated information of the Genre
     */
    async update(id, postData) {
        return this.$genresService.update({
            where: { id: id },
            data: postData
        });
    }
    /**
     * DELETE request to remove a Genre from the `genres` table
     *
     * @param id The UUID of the Genre to be removed
     */
    async delete(id) {
        return this.$genresService.delete({ id: id });
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
], GenresController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    public_decorator_1.Public(),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__param(1, common_1.Query('select', parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GenresController.prototype, "findOne", null);
tslib_1.__decorate([
    common_1.Post(''),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Create, genre_1.Genre)),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [genre_1.CreateGenre]),
    tslib_1.__metadata("design:returntype", Promise)
], GenresController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Update, genre_1.Genre)),
    tslib_1.__param(0, common_1.Param('id', parse_int_pipe_1.ParseIntPipe)),
    tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, genre_1.UpdateGenre]),
    tslib_1.__metadata("design:returntype", Promise)
], GenresController.prototype, "update", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Delete, genre_1.Genre)),
    tslib_1.__param(0, common_1.Param('id', parse_int_pipe_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], GenresController.prototype, "delete", null);
GenresController = tslib_1.__decorate([
    common_1.Controller('genres'),
    tslib_1.__metadata("design:paramtypes", [genres_service_1.GenresService,
        utility_service_1.UtilityService])
], GenresController);
exports.GenresController = GenresController;
