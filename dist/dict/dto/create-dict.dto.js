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
exports.SetDictInfoDto = exports.DelDictDto = exports.GetDictinfo = exports.CreateDictDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateDictDto {
}
exports.CreateDictDto = CreateDictDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID' }),
    __metadata("design:type", Number)
], CreateDictDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '字典名称' }),
    __metadata("design:type", Date)
], CreateDictDto.prototype, "createTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '字典名称', example: '字典名称' }),
    __metadata("design:type", String)
], CreateDictDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '字典标识', example: '' }),
    __metadata("design:type", String)
], CreateDictDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '字典状态', example: '' }),
    __metadata("design:type", Boolean)
], CreateDictDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '字典备注', example: '' }),
    __metadata("design:type", String)
], CreateDictDto.prototype, "description", void 0);
class GetDictinfo {
}
exports.GetDictinfo = GetDictinfo;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id' }),
    __metadata("design:type", Number)
], GetDictinfo.prototype, "id", void 0);
class DelDictDto {
}
exports.DelDictDto = DelDictDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'IDS数组', default: [] }),
    __metadata("design:type", Array)
], DelDictDto.prototype, "ids", void 0);
class SetDictInfoDto {
}
exports.SetDictInfoDto = SetDictInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID' }),
    __metadata("design:type", Number)
], SetDictInfoDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '字典信息名称', example: '' }),
    __metadata("design:type", String)
], SetDictInfoDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'pid', example: '' }),
    __metadata("design:type", Number)
], SetDictInfoDto.prototype, "pid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '字典信息值', example: '' }),
    __metadata("design:type", Number)
], SetDictInfoDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '字典信息状态', example: '' }),
    __metadata("design:type", Boolean)
], SetDictInfoDto.prototype, "status", void 0);
//# sourceMappingURL=create-dict.dto.js.map