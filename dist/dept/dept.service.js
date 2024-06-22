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
exports.DeptService = void 0;
const dept_entity_1 = require("./entities/dept.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let DeptService = class DeptService {
    constructor(dept) {
        this.dept = dept;
    }
    async findAll() {
        const dept = await this.dept.createQueryBuilder('dept');
        const depts = await dept.getMany();
        return { data: { list: depts }, message: '获取部门列表成功' };
    }
    async findOne(id) {
        const dept = await this.dept.createQueryBuilder('dept');
        dept.where('dept.id = :id', { id: id });
        const deptinfo = await dept.getOne();
        return { data: deptinfo, message: '获取部门详情成功' };
    }
    async setDept(createDeptDto) {
        const dept = await this.dept.createQueryBuilder('dept');
        if (createDeptDto.id) {
            dept.update().set(createDeptDto).where('id = :id', { id: createDeptDto.id }).execute();
            return { message: '更新部门成功' };
        }
        createDeptDto.createTime = new Date();
        delete createDeptDto.id;
        dept.insert().into(dept_entity_1.Dept).values(createDeptDto).execute();
        return { message: '添加部门成功' };
    }
    async remove(ids) {
        const qb = await this.dept.createQueryBuilder('user');
        qb.delete().from(dept_entity_1.Dept).where('id in (:...ids)', { ids: ids }).execute();
        return { message: '删除成功' };
    }
};
exports.DeptService = DeptService;
exports.DeptService = DeptService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dept_entity_1.Dept)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DeptService);
//# sourceMappingURL=dept.service.js.map