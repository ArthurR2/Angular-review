"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseIntPipe = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const http_error_by_code_util_1 = require("@nestjs/common/utils/http-error-by-code.util");
let ParseIntPipe = class ParseIntPipe {
    constructor(options) {
        options = options || {};
        const { exceptionFactory, errorHttpStatusCode = common_1.HttpStatus.BAD_REQUEST } = options;
        this.exceptionFactory = exceptionFactory || (error => new http_error_by_code_util_1.HttpErrorByCode[errorHttpStatusCode](error));
    }
    /**
     *
     * @param value
     */
    async transform(value, metadata) {
        if (!value || value.length === 0) {
            return undefined;
        }
        const isNumeric = ['string', 'number'].includes(typeof value) &&
            !isNaN(parseFloat(value)) &&
            isFinite(value);
        if (!isNumeric) {
            throw this.exceptionFactory('Validation failed (numeric string is expected)');
        }
        return parseInt(value, 10);
    }
};
ParseIntPipe = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, common_1.Optional()),
    tslib_1.__metadata("design:paramtypes", [Object])
], ParseIntPipe);
exports.ParseIntPipe = ParseIntPipe;
