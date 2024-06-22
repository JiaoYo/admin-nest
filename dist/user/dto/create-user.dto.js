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
exports.DeleteUserDto = exports.GetUserListDto = exports.SetUserDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class SetUserDto {
}
exports.SetUserDto = SetUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID' }),
    __metadata("design:type", Number)
], SetUserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: '用户名不能为空' }),
    (0, swagger_1.ApiProperty)({ description: '用户名' }),
    __metadata("design:type", String)
], SetUserDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '昵称不能为空' }),
    (0, swagger_1.ApiProperty)({ description: '昵称' }),
    __metadata("design:type", String)
], SetUserDto.prototype, "nickname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '密码不能为空' }),
    (0, swagger_1.ApiProperty)({ description: '密码' }),
    __metadata("design:type", String)
], SetUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '邮箱' }),
    __metadata("design:type", String)
], SetUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '头像' }),
    __metadata("design:type", String)
], SetUserDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '性别' }),
    __metadata("design:type", Boolean)
], SetUserDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '是否禁用' }),
    __metadata("design:type", Boolean)
], SetUserDto.prototype, "disabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '创建时间' }),
    __metadata("design:type", Date)
], SetUserDto.prototype, "createTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '状态' }),
    __metadata("design:type", Boolean)
], SetUserDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '手机号' }),
    __metadata("design:type", Number)
], SetUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '角色ID', default: ["role_user"] }),
    __metadata("design:type", Array)
], SetUserDto.prototype, "roleIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '角色名称' }),
    __metadata("design:type", String)
], SetUserDto.prototype, "roleNames", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '部门id' }),
    __metadata("design:type", Number)
], SetUserDto.prototype, "deptId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '部门名称' }),
    __metadata("design:type", String)
], SetUserDto.prototype, "deptName", void 0);
class GetUserListDto {
}
exports.GetUserListDto = GetUserListDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '页码', default: 1 }),
    __metadata("design:type", Number)
], GetUserListDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '每页条数', default: 10 }),
    __metadata("design:type", Number)
], GetUserListDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '部门id' }),
    __metadata("design:type", Number)
], GetUserListDto.prototype, "deptId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '用户名', default: '' }),
    __metadata("design:type", String)
], GetUserListDto.prototype, "username", void 0);
class DeleteUserDto {
}
exports.DeleteUserDto = DeleteUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ids数组', default: [] }),
    __metadata("design:type", Array)
], DeleteUserDto.prototype, "ids", void 0);
//# sourceMappingURL=create-user.dto.js.map