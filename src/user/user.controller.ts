import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
@ApiTags('用户')
@Controller('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post('regUser')
  @ApiOperation({ summary: '注册', description: '创建一个用户' })
  register(@Body() data: any) {
    return this.userService.regUser(data);
  }
  @Post('login')
  @ApiOperation({ summary: '登录' })
  login(@Body() data: any) {
    return this.userService.login(data);
  }

  @Post('set')
  @ApiOperation({ summary: '设置用户', description: '设置一个用户' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('list')
  @ApiOperation({ summary: '获取所有用户', description: '获取所有用户' })
  findAll(@Body() body: any) {
    return this.userService.findAll(body);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户详情', description: '获取用户详情' })
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }
  @Post('userInfo')
  @ApiOperation({ summary: '获取用户信息', description: '获取用户信息' })
  getInfo(@Headers() header: any) {
    return this.userService.getInfo(header.authorization.replace('Bearer', '').trim());
  }
  @Post('del')
  @ApiOperation({ summary: '删除用户', description: '删除用户' })
  remove(@Body() body: { ids: string[] }) {
    return this.userService.remove(body.ids);
  }
}
