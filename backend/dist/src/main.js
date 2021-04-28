"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['log', 'error', 'warn']
    });
    app.setGlobalPrefix('api');
    app.set('trust proxy', 1);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: false,
        whitelist: true
    }));
    const configService = app.get(config_1.ConfigService);
    if (!configService.get('DATABASE_URL')) {
        throw new Error('Environment variable `DATABASE_URL` is not defined.');
    }
    if (!configService.get('JWT_SECRET')) {
        throw new Error('Environment variable `JWT_SECRET` is not defined.');
    }
    if (!configService.get('SECRET_KEY')) {
        throw new Error('Environment variable `SECRET_KEY` is not defined.');
    }
    return app;
}
exports.bootstrap = bootstrap;
if (!(typeof expect === 'function')) {
    bootstrap()
        .then(async (app) => app.listen(3000))
        .catch(console.error);
}
