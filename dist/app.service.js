"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('./config');
const user_entity_1 = require("./user/entities/user.entity");
let AppService = class AppService {
    constructor(user) {
        this.user = user;
    }
    async login(data) {
        const { username, password } = data;
        const qb = this.user.createQueryBuilder('user');
        qb.where('username = :username', { username });
        const results = await qb.getMany();
        if (results.length == 0) {
            throw new common_1.HttpException('用户不存在', 401);
        }
        const testPassword = results[0].password;
        const isPasswordValid = await bcrypt.compare(password, testPassword);
        if (!isPasswordValid) {
            throw new common_1.HttpException('密码错误', 401);
        }
        if (!results[0].status) {
            throw new common_1.HttpException('用户被禁用', 401);
        }
        const obj = {
            username,
            password,
            id: results[0].id,
        };
        const token = jwt.sign({ obj }, config.jwtSecretKey, { expiresIn: config.expiresIn });
        return { data: { token: 'Bearer ' + token }, message: '登录成功' };
    }
    async regUser(data) {
        const { username, password } = data;
        const qb = await this.user.createQueryBuilder('user');
        qb.where('username = :username', { username });
        const results = await qb.getMany();
        if (results.length > 0) {
            throw new common_1.HttpException('用户名已存在', 401);
        }
        const userinfo = {};
        userinfo.username = username;
        userinfo.password = await bcrypt.hashSync(password, 10);
        userinfo.roleIds = JSON.stringify(['role_user']);
        userinfo.status = 1;
        userinfo.nickname = userinfo.username;
        userinfo.createTime = new Date();
        qb.insert().into(user_entity_1.User).values(userinfo).execute();
        return { message: '注册成功' };
    }
    async setPassword(data) {
        const { oldPassword, newPassword, id } = data;
        const qb = await this.user.createQueryBuilder('user');
        qb.where('id = :id', { id });
        const results = await qb.getOne();
        const isPasswordValid = await bcrypt.compare(oldPassword, results.password);
        if (!isPasswordValid) {
            throw new common_1.HttpException('原密码错误', 401);
        }
        results.password = await bcrypt.hashSync(newPassword, 10);
        qb.update().set(results).where('id = :id', { id }).execute();
        return { message: '密码修改成功' };
    }
    async setAvatar(data) {
        const { avatar, id } = data;
        const qb = await this.user.createQueryBuilder('user');
        qb.update().set({ avatar }).where('id = :id', { id }).execute();
        return { message: '头像修改成功' };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppService);
//# sourceMappingURL=app.service.js.map