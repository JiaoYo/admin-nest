import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('./config') // 配置文件
import { User } from './user/entities/user.entity'
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) { }
  // 登录
  async login(data: any) {
    const { username, password } = data;
    const qb = this.user.createQueryBuilder('user');
    qb.where('username = :username', { username })
    const results = await qb.getMany();
    if (results.length == 0) {
      throw new HttpException('用户不存在', 401);
    }
    const testPassword = results[0].password
    const isPasswordValid = await bcrypt.compare(password, testPassword);
    if (!isPasswordValid) {
      return { message: '密码错误' }
    }
    if (!results[0].status) {
      return { message: '用户被禁用' }
    }
    const obj = {
      username,
      password,
      id: results[0].id,
    }
    const token = jwt.sign({ obj }, config.jwtSecretKey, { expiresIn: config.expiresIn });
    return { data: { token: 'Bearer ' + token }, message: '登录成功' }
  }
  // 注册
  async regUser(data: any) {
    const { username, password } = data;
    const qb = await this.user.createQueryBuilder('user');
    qb.where('username = :username', { username })
    const results = await qb.getMany();
    if (results.length > 0) {
      throw new HttpException('用户名已存在', 401);
    }
    const userinfo = <any>{}
    userinfo.username = username
    userinfo.password = await bcrypt.hashSync(password, 10);
    userinfo.roleIds = JSON.stringify(['role_user'])
    userinfo.status = 1
    userinfo.nickname = userinfo.username
    userinfo.createTime = new Date()
    qb.insert().into(User).values(userinfo).execute();
    return { message: '注册成功' }
  }
}
