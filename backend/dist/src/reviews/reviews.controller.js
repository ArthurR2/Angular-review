"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsController = void 0;
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
const reviews_service_1 = require("./reviews.service");
const review_1 = require("./dto/review");
let ReviewsController = class ReviewsController {
    /**
     * Reviews controller constructor
     *
     * @param $reviewsService The database connection to the `reviews` table
     */
    constructor($utilityService, $reviewsService) {
        this.$utilityService = $utilityService;
        this.$reviewsService = $reviewsService;
    }
    /**
     * GET request to find all records in the `reviews` table
     *
     * @param query Query parametesto alter the `WHERE` SQL clause
     */
    async findAll(skip, take, cursor, where, orderBy, select) {
        const query = { skip, take, cursor, where, orderBy, select };
        return this.$reviewsService.findAll(query);
    }
    /**
     * GET request to find a book by a string UUID
     *
     * @param id The UUID of the requested Review
     */
    async findOne(id, select) {
        const query = { where: { id: id }, select };
        return this.$reviewsService.findOne(query);
    }
    /**
     * POST request to create a new Review in the `reviews` table
     *
     * @param postData The Review data to be created
     */
    async create(postData) {
        return this.$reviewsService.create(postData);
    }
    /**
     * PUT request to update a Review in the `reviews` table
     *
     * @param id The UUID of the Review to be updated
     * @param postData The updated information of the Review
     */
    async update(id, postData) {
        return this.$reviewsService.update({
            where: { id: id },
            data: postData
        });
    }
    /**
     * DELETE request to remove a Review from the `reviews` table
     *
     * @param id The UUID of the Review to be removed
     */
    async delete(id) {
        return this.$reviewsService.delete({ id: id });
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
], ReviewsController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    public_decorator_1.Public(),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseUUIDPipe)),
    tslib_1.__param(1, common_1.Query('select', new parse_frontend_btoa_pipe_1.ParseFrontendBtoaPipe())),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsController.prototype, "findOne", null);
tslib_1.__decorate([
    common_1.Post(''),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Create, review_1.Review)),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Update, review_1.Review)),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseUUIDPipe)),
    tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsController.prototype, "update", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(policies_guard_1.PoliciesGuard),
    check_policies_decorator_1.CheckPolicies((ability) => ability.can(casl_ability_factory_1.Action.Delete, review_1.Review)),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseUUIDPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsController.prototype, "delete", null);
ReviewsController = tslib_1.__decorate([
    common_1.Controller('reviews'),
    tslib_1.__metadata("design:paramtypes", [utility_service_1.UtilityService,
        reviews_service_1.ReviewsService])
], ReviewsController);
exports.ReviewsController = ReviewsController;
