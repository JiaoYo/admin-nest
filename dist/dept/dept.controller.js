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
exports.DeptController = void 0;
const common_1 = require("@nestjs/common");
const dept_service_1 = require("./dept.service");
const create_dept_dto_1 = require("./dto/create-dept.dto");
const swagger_1 = require("@nestjs/swagger");
let DeptController = class DeptController {
    constructor(deptService) {
        this.deptService = deptService;
    }
    findAll() {
        return this.deptService.findAll();
    }
    findOne(id) {
        return this.deptService.findOne(+id);
    }
    set(createDeptDto) {
        return this.deptService.setDept(createDeptDto);
    }
    remove(body) {
        return this.deptService.remove(body.ids);
    }
};
exports.DeptController = DeptController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '获取部门列表', description: '获取全部部门列表' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeptController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '获取某个部门详情', description: '获取某个部门详情' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeptController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('set'),
    (0, swagger_1.ApiOperation)({ summary: '设置部门', description: '设置部门（有id修改部门，无id添加部门）' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dept_dto_1.CreateDeptDto]),
    __metadata("design:returntype", void 0)
], DeptController.prototype, "set", null);
__decorate([
    (0, common_1.Post)('del'),
    (0, swagger_1.ApiOperation)({ summary: '删除部门', description: '删除部门' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dept_dto_1.DelDeptDto]),
    __metadata("design:returntype", void 0)
], DeptController.prototype, "remove", null);
exports.DeptController = DeptController = __decorate([
    (0, swagger_1.ApiTags)('部门'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('dept'),
    __metadata("design:paramtypes", [dept_service_1.DeptService])
], DeptController);
//# sourceMappingURL=dept.controller.js.map