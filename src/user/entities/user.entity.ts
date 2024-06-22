import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity('ev_users')
export class User {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  @Column({ type: "varchar", length: 255 })
  username: string;

  @Column({ type: "varchar", length: 255 })
  password: string;

  @Column({ type: "varchar", length: 200 })
  nickname: string;
  @Column({ type: "varchar", length: 255, default: null })
  email: string;
  @Column({ type: "varchar", length: 255, default: 'http://www.jy2002.love/assets/infourl-3lzKe2gJ.png' })
  avatar: string;
  @Column({ type: 'tinyint', default: true })
  gender: boolean;
  @Column({ type: 'tinyint', default: 0 })
  disabled: boolean;
  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP " })
  createTime: Date;
  @Column({ type: 'tinyint', default: true })
  status: boolean;
  @Column({ type: "varchar", length: 255, default: null })
  phone: number;
  @Column({ type: "varchar", length: 255, default: "[]" })
  roleIds: Array<string>;
  @Column({ type: "varchar", length: 255, default: null })
  roleNames: string;
  @Column({ type: "int", default: null })
  deptId: number;
  @Column({ type: "varchar", length: 255, default: null })
  deptName: string;
}
