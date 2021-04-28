"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tslib_1 = require("tslib");
const utility_service_1 = require("./../utility/utility.service");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const public_decorator_1 = require("../public.decorator");
const users_service_1 = require("./users.service");
const user_1 = require("./dto/user");
const parse_int_pipe_1 = require("../parse-int.pipe");
const parse_frontend_btoa_pipe_1 = require("../parse-frontend-btoa.pipe");
const check_policies_decorator_1 = require("../auth/check-policies.decorator");
const policies_guard_1 = require("../auth/policies.guard");
const casl_ability_factory_1 = require("../auth/casl-ability.factory");
let UsersController = class UsersController {
    /**
   * Users controller constructor
   *
   * @param $usersService The database connection to the `users` table
   */
    constructor($utilityService, $usersService) {
        this.$utilityService = $utilityService;
        this.$usersService = $usersService;
    }
    /**
     * GET request to find all records in the `users` table.
     *
     * @param query Query parameters to alter the `WHERE` SQL clause
     */
    async findAll(skip, take, cursor, where, orderBy, select) {
        const query = { skip, take, cursor, where, orderBy, select };
        return this.$usersService.findAll(query);
    }
    /**
     * GET request to find a User by a string UUID
     *
     * @param id The UUID of the requested User
     */
    async findOne(id, select) {
        const query = { where: { id: id }, select };
        return this.$usersService.findOne(query);
    }
    /**
     * POST request to create a new User in the `users` table
     *
     * @param postData The Book data to be created
     */
    async create(postData) {
        return this.$usersService.create(postData);
    }
    /**
     * PUT request to update a User in the `users` table
     *
     * @param id The UUID of the User to be updated
     * @param bookData The updated information of the Book
     */
    async update(id, postData) {
        return this.$usersService.update({
            where: { id: id },
            data: postData
        });
    }
    /**
     * DELETE request to remove a User from the `users` table
     *
     * @param id The UUID of the User to be removed
     */
    async delete(id) {
        return this.$usersService.delete({ id: id });
    }
};
tslib_1.__decorate([
    common_1.Get(),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Manage, user_1.User)),
    tslib_1.__param(0, common_1.Query('skip', parse_int_pipe_1.ParseIntPipe)),
    tslib_1.__param(1, common_1.Query('take', parse_int_pipe_1.ParseIntPipe)),
    tslib_1.__param(2, common_1.Query('cursor', parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe)),
    tslib_1.__param(3, common_1.Query('where', parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe)),
    tslib_1.__param(4, common_1.Query('orderBy', parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe)),
    tslib_1.__param(5, common_1.Query('select', parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Object, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Read, user_1.User)),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseUUIDPipe)),
    tslib_1.__param(1, common_1.Query('select', parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
tslib_1.__decorate([
    common_1.Post(''),
    public_decorator_1.Public(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Update, user_1.User)),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseUUIDPipe)),
    tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, user_1.UpdateUser]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Delete, user_1.User)),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseUUIDPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
UsersController = tslib_1.__decorate([
    common_1.Controller('users'),
    tslib_1.__metadata("design:paramtypes", [utility_service_1.UtilityService,
        users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
