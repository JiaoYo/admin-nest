import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
class loginDto {
  @ApiProperty({ description: '用户名', example: 'admin' })
  username: string;
  @ApiProperty({ description: '密码', example: '123456' })
  password: string;
}
class regUserDto {
  @ApiProperty({ description: '用户名', example: 'admin' })
  username: string;
  @ApiProperty({ description: '密码', example: '123456' })
  password: string;
}
@ApiTags('登录登出')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Post('login')
  @ApiOperation({ summary: '登录' })
  login(@Body() data: loginDto) {
    return this.appService.login(data);
  }
  @Post('regUser')
  @ApiOperation({ summary: '注册', description: '创建一个用户' })
  register(@Body() data: regUserDto) {
    return this.appService.regUser(data);
  }
  @Get('logout')
  @ApiOperation({ summary: '登出' })
  logout() {
    return { message: '退出成功' }
  }
}
