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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const role_service_1 = require("./role.service");
const create_role_dto_1 = require("./dto/create-role.dto");
const swagger_1 = require("@nestjs/swagger");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    findAll(body) {
        return this.roleService.findAll(body);
    }
    findOne(id) {
        return this.roleService.findOne(+id);
    }
    setRoleMenu(body) {
        return this.roleService.setRoleMenu(body);
    }
    getRoleInfo(id) {
        return this.roleService.getRoleInfo(+id);
    }
    setRoleInfo(body) {
        return this.roleService.setRoleInfo(body);
    }
    remove(body) {
        return this.roleService.remove(body.ids);
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, common_1.Post)('list'),
    (0, swagger_1.ApiOperation)({ summary: '获取角色列表' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.GetRoleListDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('menu/:id'),
    (0, swagger_1.ApiOperation)({ summary: '获取角色的权限' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('menu'),
    (0, swagger_1.ApiOperation)({ summary: '设置角色的权限' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.setRoleMenu]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "setRoleMenu", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '获取角色的详情' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "getRoleInfo", null);
__decorate([
    (0, common_1.Post)('set'),
    (0, swagger_1.ApiOperation)({ summary: '设置角色' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "setRoleInfo", null);
__decorate([
    (0, common_1.Post)('del'),
    (0, swagger_1.ApiOperation)({ summary: '删除角色' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.DelRoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "remove", null);
exports.RoleController = RoleController = __decorate([
    (0, swagger_1.ApiTags)('角色'),
    (0, common_1.Controller)('role'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map