export class CreateDictDto {
  id: number; // 标记为主列，值自动生成
  createTime: Date;
  name: string;
  code: string;
  status: boolean;
  description: string;
}
