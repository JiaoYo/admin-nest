import { Controller, Get, Post, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express'
import { join } from 'path';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
@Controller('upload')
@ApiTags('上传文件')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }
  @Post('album')
  @ApiOperation({ summary: '上传图片' })
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    return { data: 'localhost:8888/img/' + file.filename }
  }
}