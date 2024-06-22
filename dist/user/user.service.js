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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const menu_entity_1 = require("../menu/entities/menu.entity");
const role_entity_1 = require("../role/entities/role.entity");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
let UserService = class UserService {
    constructor(user, menu, role) {
        this.user = user;
        this.menu = menu;
        this.role = role;
    }
    async create(data) {
        const qb = await this.user.createQueryBuilder('user');
        if (data.id) {
            qb.update().set(data).where('id = :id', { id: data.id }).execute();
            return { message: '修改成功' };
        }
        qb.insert().into(user_entity_1.User).values(data).execute();
        return { message: '添加成功' };
    }
    async findAll(body) {
        const qb = await this.user.createQueryBuilder('user');
        const { page = 1, size = 10, deptId, username, status } = body;
        if (deptId) {
            qb.where('deptId = :deptId', { deptId });
        }
        if (username) {
            qb.andWhere('username like :username', { username: `%${username}%` });
        }
        if (String(status) == '0' || String(status) == '1') {
            qb.andWhere('status = :status', { status });
        }
        qb.limit(size);
        qb.offset(size * (page - 1));
        const count = await qb.getCount();
        const posts = await qb.getMany();
        return { data: { list: posts, total: count }, message: '获取用户列表成功' };
    }
    async findOne(id) {
        const qb = await this.user.createQueryBuilder('user');
        qb.where('id = :id', { id: id });
        const user = await qb.getMany();
        return { data: user[0], message: '获取用户详情成功' };
    }
    async getInfo(token) {
        const obj = jwt.verify(token, config.jwtSecretKey);
        const qb = await this.user.createQueryBuilder('user');
        qb.where('id = :id', { id: obj.obj.id });
        const user = await qb.getMany();
        let codes = JSON.parse(user[0]?.roleIds) ? JSON.parse(user[0]?.roleIds) : ['role_user'];
        const role = await this.role.createQueryBuilder('role');
        role.select('role.menus');
        role.where('code in  (:...codes)', { codes });
        const roles = await role.getMany();
        let mergedMenus = [];
        roles.forEach((item) => {
            if (item.menus) {
                mergedMenus.push(...JSON.parse(item.menus));
            }
        });
        mergedMenus = [...new Set(mergedMenus)];
        const menu = await this.menu.createQueryBuilder('menu');
        menu.where('status = :status', { status: 1 });
        const menus = await menu.getMany();
        menus.forEach((item) => {
            item.keepAlive = item.keepAlive == 1;
            item.hidden = item.hidden == 1;
            item.breadcrumb = item.breadcrumb == 1;
            item.showInTabs = item.showInTabs == 1;
            item.affix = item.affix == 1;
            item.alwaysShow = item.alwaysShow == 1;
        });
        let arr = menus.filter(item => {
            return mergedMenus.includes(item.id);
        });
        user[0].menus = arr;
        return { data: user[0], message: '获取用户信息成功' };
    }
    async remove(ids) {
        const qb = await this.user.createQueryBuilder('user');
        qb.delete().from(user_entity_1.User).where('id in (:...ids)', { ids: ids }).execute();
        return { message: '删除成功' };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(menu_entity_1.Menu)),
    __param(2, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map