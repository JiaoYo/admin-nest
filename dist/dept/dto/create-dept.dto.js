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
exports.DelDeptDto = exports.CreateDeptDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateDeptDto {
}
exports.CreateDeptDto = CreateDeptDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID' }),
    __metadata("design:type", Number)
], CreateDeptDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '所属部门' }),
    __metadata("design:type", String)
], CreateDeptDto.prototype, "pid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '部门名称' }),
    __metadata("design:type", String)
], CreateDeptDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '排序' }),
    __metadata("design:type", Number)
], CreateDeptDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '状态' }),
    __metadata("design:type", String)
], CreateDeptDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '创建时间' }),
    __metadata("design:type", Date)
], CreateDeptDto.prototype, "createTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '备注' }),
    __metadata("design:type", Boolean)
], CreateDeptDto.prototype, "description", void 0);
class DelDeptDto {
}
exports.DelDeptDto = DelDeptDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'IDS数组' }),
    __metadata("design:type", Array)
], DelDeptDto.prototype, "ids", void 0);
//# sourceMappingURL=create-dept.dto.js.map