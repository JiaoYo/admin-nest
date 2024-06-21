export class CreateDeptDto {
  id: number; // 标记为主列，值自动生成
  pid: string;
  name: string;
  sort: number;
  status: string;
  createTime: Date;
  description: boolean;
}
