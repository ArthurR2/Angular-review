"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseFrontendBtoaPipe = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
let ParseFrontendBtoaPipe = class ParseFrontendBtoaPipe {
    /**
     * Transforms input data from the frontend as a Base64
     * string into a decoded object.
     *
     * @param value The Base64 string to decode
     */
    transform(value, metadata) {
        if (typeof value === 'string') {
            return JSON.parse(Buffer.from(value, 'base64').toString());
        }
        else {
            return undefined;
        }
    }
};
ParseFrontendBtoaPipe = tslib_1.__decorate([
    common_1.Injectable()
], ParseFrontendBtoaPipe);
exports.ParseFrontendBtoaPipe = ParseFrontendBtoaPipe;
