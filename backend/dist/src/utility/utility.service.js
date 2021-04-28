"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
let UtilityService = class UtilityService {
    /**
     * Converts an input Base64 encoded string representing a JSON object into a JSON object
     *
     * @param input Input Base64 encoded JSON object
     */
    async convertBtoO(input) {
        return JSON.parse(Buffer.from(input, 'base64').toString());
    }
    /**
     * Converts an input Objecct to a Base64 encoded string.
     *
     * @param input Input Object
     */
    async convertOtoB(input) {
        return Buffer.from(JSON.stringify(input)).toString('base64');
    }
};
UtilityService = tslib_1.__decorate([
    common_1.Injectable()
], UtilityService);
exports.UtilityService = UtilityService;
