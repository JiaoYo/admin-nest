"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const response_1 = require("./common/response");
const filter_1 = require("./common/filter");
const path_1 = require("path");
const express = require("express");
const swagger_1 = require("@nestjs/swagger");
const moment = require('moment');
Date.prototype.toISOString = function () {
    return moment(this).format('YYYY-MM-DD HH:mm:ss');
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new response_1.Response());
    app.useGlobalFilters(new filter_1.HttpFilter());
    app.enableCors();
    app.use('/img', express.static((0, path_1.join)(__dirname, '../images')));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('管理后台')
        .setDescription('admin接口文档')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(8888);
}
bootstrap();
//# sourceMappingURL=main.js.map