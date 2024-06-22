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
exports.DelMenuDto = exports.CreateMenuDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateMenuDto {
}
exports.CreateMenuDto = CreateMenuDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id' }),
    __metadata("design:type", Number)
], CreateMenuDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'pid' }),
    __metadata("design:type", Number)
], CreateMenuDto.prototype, "pid", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '名称不能为空' }),
    (0, swagger_1.ApiProperty)({ description: '名称' }),
    __metadata("design:type", String)
], CreateMenuDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '图标' }),
    __metadata("design:type", String)
], CreateMenuDto.prototype, "svgIcon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '图标' }),
    __metadata("design:type", String)
], CreateMenuDto.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '是否缓存' }),
    __metadata("design:type", Boolean)
], CreateMenuDto.prototype, "keepAlive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '是否隐藏' }),
    __metadata("design:type", Number)
], CreateMenuDto.prototype, "hidden", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '排序' }),
    __metadata("design:type", String)
], CreateMenuDto.prototype, "sort", void 0);
class DelMenuDto {
}
exports.DelMenuDto = DelMenuDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id' }),
    __metadata("design:type", Number)
], DelMenuDto.prototype, "id", void 0);
//# sourceMappingURL=create-menu.dto.js.map