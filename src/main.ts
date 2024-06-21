import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { ValidationPipe } from '@nestjs/common';
import { Response } from './common/response';
import { HttpFilter } from './common/filter';
import { join } from 'path'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const moment = require('moment')
Date.prototype.toISOString = function () {
  return moment(this).format('YYYY-MM-DD HH:mm:ss')
}
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api'); // 设置全局前缀
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new Response()) // 设置全局响应拦截器
  app.useGlobalFilters(new HttpFilter()) // 设置全局异常拦截器
  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: "/img"
  })
  app.enableCors()
  // 设置swagger文档
  const config = new DocumentBuilder()
    .setTitle('管理后台')
    .setDescription('admin接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(8888);
}
bootstrap();
