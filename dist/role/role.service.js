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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./entities/role.entity");
let RoleService = class RoleService {
    constructor(role) {
        this.role = role;
    }
    async findAll(body) {
        const { page, size, name, status } = body;
        const role = await this.role.createQueryBuilder('role');
        if (name) {
            role.andWhere('name like :name', { name: `%${name}%` });
        }
        if (String(status) == '0' || String(status) == '1') {
            role.andWhere('status = :status', { status });
        }
        role.limit(size);
        role.offset(size * (page - 1));
        const roles = await role.getMany();
        const total = await role.getCount();
        return { data: { list: roles, total }, message: '获取角色列表成功' };
    }
    async findOne(id) {
        const role = await this.role.createQueryBuilder('role');
        role.select('role.menus');
        role.where('id = :id', { id });
        const roleMenuInfo = await role.getOne();
        return { data: roleMenuInfo, message: '获取角色权限成功' };
    }
    async setRoleMenu(body) {
        const role = await this.role.createQueryBuilder('role');
        role.update(role_entity_1.Role).set({ menus: body.menus }).where('id = :id', { id: body.id }).execute();
        return { message: '设置角色权限成功' };
    }
    async getRoleInfo(id) {
        const role = await this.role.createQueryBuilder('role');
        role.where('id = :id', { id });
        const roleInfo = await role.getOne();
        return { data: roleInfo, message: '获取角色详情成功' };
    }
    async setRoleInfo(body) {
        const role = await this.role.createQueryBuilder('role');
        if (body.id) {
            role.update(role_entity_1.Role).set(body).where('id = :id', { id: body.id }).execute();
            return { message: '更新角色成功' };
        }
        body.createTime = new Date();
        delete body.id;
        role.insert().values(body).execute();
        return { message: '创建角色成功' };
    }
    async remove(ids) {
        const qb = await this.role.createQueryBuilder('role');
        qb.delete().from(role_entity_1.Role).where('id in (:...ids)', { ids: ids }).execute();
        return { message: '删除成功' };
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoleService);
//# sourceMappingURL=role.service.js.map