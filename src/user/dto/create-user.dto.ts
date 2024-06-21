import { IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateUserDto {
  // @ApiProperty({ description: 'ID' })
  // id: number; // 标记为主列，值自动生成
  @IsString() //是否为字符串
  @IsNotEmpty({ message: '用户名不能为空' })//验证是否为空
  @ApiProperty({ description: '用户名' })
  username: string;
  @IsNotEmpty({ message: '昵称不能为空' })//验证是否为空
  @ApiProperty({ description: '昵称' })
  nickname: string;
  @IsNotEmpty({ message: '密码不能为空' })//验证是否为空
  @ApiProperty({ description: '密码' })
  password: string;
  @ApiProperty({ description: '邮箱' })
  email: string;
  @ApiProperty({ description: '头像' })
  avatar: string;
  @ApiProperty({ description: '性别' })
  gender: boolean;
  @ApiProperty({ description: '是否禁用' })
  disabled: boolean;
  @ApiProperty({ description: '创建时间' })
  createTime: string;
  @ApiProperty({ description: '状态' })
  status: boolean;
  @ApiProperty({ description: '手机号' })
  phone: number;
  @ApiProperty({ description: '角色ID' })
  roleIds: Array<string>;
  @ApiProperty({ description: '角色名称' })
  roleNames: string;
  @ApiProperty({ description: '部门id' })
  deptId: number;
  @ApiProperty({ description: '部门名称' })
  deptName: string;
}