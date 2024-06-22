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
exports.MenuController = void 0;
const common_1 = require("@nestjs/common");
const menu_service_1 = require("./menu.service");
const create_menu_dto_1 = require("./dto/create-menu.dto");
const swagger_1 = require("@nestjs/swagger");
let MenuController = class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    findAll() {
        return this.menuService.findAll();
    }
    findOne(id) {
        return this.menuService.findOne(+id);
    }
    setdate(createMenuDto) {
        return this.menuService.setdate(createMenuDto);
    }
    remove(body) {
        return this.menuService.remove(body.id);
    }
};
exports.MenuController = MenuController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '获取全部菜单', description: '获取全部菜单' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '获取菜单详情', description: '获取菜单详情' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('set'),
    (0, swagger_1.ApiOperation)({ summary: '设置菜单', description: '设置菜单(有id是修改反之添加)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_dto_1.CreateMenuDto]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "setdate", null);
__decorate([
    (0, common_1.Post)('del'),
    (0, swagger_1.ApiOperation)({ summary: '删除菜单', description: '删除一个菜单' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_dto_1.DelMenuDto]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "remove", null);
exports.MenuController = MenuController = __decorate([
    (0, swagger_1.ApiTags)('菜单'),
    (0, common_1.Controller)('menu'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuController);
//# sourceMappingURL=menu.controller.js.map