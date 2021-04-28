"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto_1 = require("crypto");
let EncryptionService = class EncryptionService {
    /**
     * Encryption Service constructor
     */
    constructor($configService) {
        this.$configService = $configService;
        const secret = this.$configService.get('SECRET_KEY');
        this.key = crypto_1.scryptSync(secret, 'salt', 32);
    }
    /**
     * Encrypt a string
     *
     * @param text The string to encrypt.
     */
    async encrypt(text) {
        const iv = crypto_1.randomBytes(16);
        const cipher = crypto_1.createCipheriv('aes-256-ctr', this.key, iv);
        const buf = Buffer.concat([
            cipher.update(text),
            cipher.final()
        ]);
        return `${iv.toString('hex')}:${buf.toString('hex')}`;
    }
    /**
     * Decrypt a string
     *
     * @param text The string to decrypt
     */
    async decrypt(text) {
        const [iv, encryptedText] = text.split(':').map(part => Buffer.from(part, 'hex'));
        const decipher = crypto_1.createDecipheriv('aes-256-ctr', this.key, iv);
        const buf = Buffer.concat([
            decipher.update(encryptedText),
            decipher.final()
        ]);
        return buf.toString();
    }
};
EncryptionService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService])
], EncryptionService);
exports.EncryptionService = EncryptionService;
