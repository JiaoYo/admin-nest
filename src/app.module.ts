import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';
import { RoleModule } from './role/role.module';
import { DictModule } from './dict/dict.module';
import { DeptModule } from './dept/dept.module';
import { UploadModule } from './upload/upload.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalGuard } from './common/global.guard';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './common/global.serice';
import { SocketModule } from './socket/socket.module';
import { User } from './user/entities/user.entity'
import { RedisService } from './common/redis'
import { Redis } from 'ioredis'
import { ScheduleModule } from './schedule/schedule.module';
const config = require('./config')
@Module({
  imports: [
    JwtModule.register({
      secret: config.jwtSecretKey, // jwt秘钥
      signOptions: {
        expiresIn: config.expiresIn, // jwt有效期
      }
    }),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123',
      database: '007',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      timezone: '+08:00', //服务器上配置的时区
      autoLoadEntities: true,
    }),
    UserModule, MenuModule, RoleModule, DictModule, DeptModule, UploadModule, SocketModule, ScheduleModule],
  controllers: [AppController],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: GlobalGuard,
  }, AppService, AuthService, RedisService, Redis],
  exports: [RedisService]
})
export class AppModule { }
