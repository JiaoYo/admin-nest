import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DictService } from './dict.service';
import { CreateDictDto } from './dto/create-dict.dto';
import { UpdateDictDto } from './dto/update-dict.dto';
import { ApiTags, ApiOperation, ApiBasicAuth } from '@nestjs/swagger';
@ApiTags('字典')
@Controller('dict')
export class DictController {
  constructor(private readonly dictService: DictService) { }
  @Post('set')
  @ApiOperation({ summary: '设置字典', description: '编辑/添加字典' })
  set(@Body() createDictDto: CreateDictDto) {
    return this.dictService.set(createDictDto);
  }
  @Get()
  @ApiOperation({ summary: '获取字典列表' })
  findAll() {
    return this.dictService.findAll();
  }
  @Post('del')
  @ApiOperation({ summary: '删除字典' })
  del(@Body() body: { ids: number[] }) {
    return this.dictService.del(body.ids);
  }
  @Post('info')
  @ApiOperation({ summary: '获取字典详情' })
  getDictInfo(@Body() body: any) {
    return this.dictService.getDictInfo(body);
  }

  @Post('info/set')
  @ApiOperation({ summary: '设置字典详情' })
  update(@Body() body: any) {
    return this.dictService.update(body);
  }

  @Post('info/del')
  @ApiOperation({ summary: '删除字典详情数据' })
  remove(@Body() body: { ids: number[] }) {
    return this.dictService.remove(body.ids);
  }
}
