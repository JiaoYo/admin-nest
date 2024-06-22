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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelRoleDto = exports.setRoleMenu = exports.GetRoleListDto = exports.CreateRoleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateRoleDto {
}
exports.CreateRoleDto = CreateRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID' }),
    __metadata("design:type", Number)
], CreateRoleDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '创建时间' }),
    __metadata("design:type", Date)
], CreateRoleDto.prototype, "createTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '角色名称' }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '角色编码', example: '1' }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '角色状态', example: '1' }),
    __metadata("design:type", Boolean)
], CreateRoleDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '角色备注', example: '1' }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '权限id数组', example: [] }),
    __metadata("design:type", Array)
], CreateRoleDto.prototype, "menus", void 0);
class GetRoleListDto {
}
exports.GetRoleListDto = GetRoleListDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '页数', example: 1 }),
    __metadata("design:type", Number)
], GetRoleListDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '每页条数', example: 10 }),
    __metadata("design:type", Number)
], GetRoleListDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '角色名称', example: '' }),
    __metadata("design:type", String)
], GetRoleListDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '角色状态', example: '' }),
    __metadata("design:type", Boolean)
], GetRoleListDto.prototype, "status", void 0);
class setRoleMenu {
}
exports.setRoleMenu = setRoleMenu;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '权限id数组', example: [] }),
    __metadata("design:type", Array)
], setRoleMenu.prototype, "menus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID' }),
    __metadata("design:type", Number)
], setRoleMenu.prototype, "id", void 0);
class DelRoleDto {
}
exports.DelRoleDto = DelRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'IDS数组', default: [] }),
    __metadata("design:type", Array)
], DelRoleDto.prototype, "ids", void 0);
//# sourceMappingURL=create-role.dto.js.map