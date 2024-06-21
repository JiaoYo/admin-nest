import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
@ApiTags('菜单')
@Controller('menu')
@ApiBearerAuth()
export class MenuController {
  constructor(private readonly menuService: MenuService) { }
  @Get()
  @ApiOperation({ summary: '获取全部菜单', description: '获取全部菜单' })
  findAll() {
    return this.menuService.findAll();
  }
  @Get(':id')
  @ApiOperation({ summary: '获取菜单详情', description: '获取菜单详情' })
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }
  @Post('set')
  @ApiOperation({ summary: '设置菜单', description: '设置菜单(有id是修改反之添加)' })
  setdate(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.setdate(createMenuDto);
  }
  @Post('del')
  @ApiOperation({ summary: '删除菜单', description: '删除一个菜单' })
  remove(@Body() body: { id: number }) {
    return this.menuService.remove(body.id);
  }
}
