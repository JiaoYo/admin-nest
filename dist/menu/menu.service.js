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
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const menu_entity_1 = require("./entities/menu.entity");
let MenuService = class MenuService {
    constructor(menu) {
        this.menu = menu;
    }
    async findAll() {
        const menu = await this.menu.createQueryBuilder('menu');
        const menus = await menu.getMany();
        return { data: { list: menus }, message: '获取菜单数据成功' };
    }
    async findOne(id) {
        const menu = await this.menu.createQueryBuilder('menu');
        menu.where('id = :id', { id });
        const menuDetail = await menu.getOne();
        menuDetail.keepAlive = menuDetail.keepAlive == 1 ? true : false;
        menuDetail.hidden = menuDetail.hidden == 1 ? true : false;
        menuDetail.breadcrumb = menuDetail.breadcrumb == 1 ? true : false;
        menuDetail.showInTabs = menuDetail.showInTabs == 1 ? true : false;
        menuDetail.affix = menuDetail.affix == 1 ? true : false;
        menuDetail.alwaysShow = menuDetail.alwaysShow == 1 ? true : false;
        return { data: menuDetail, message: '获取菜单详情成功' };
    }
    async setdate(createMenuDto) {
        const menu = await this.menu.createQueryBuilder('menu');
        if (createMenuDto.id) {
            menu.update(menu_entity_1.Menu).set(createMenuDto).where('id = :id', { id: createMenuDto.id }).execute();
            return { message: '更新菜单成功' };
        }
        menu.insert().into(menu_entity_1.Menu).values(createMenuDto).execute();
        return { message: '添加菜单成功' };
    }
    async remove(id) {
        const menu = await this.menu.createQueryBuilder('menu');
        menu.delete().from(menu_entity_1.Menu).where('id = :id OR pid = :id', { id }).execute();
        return { message: '删除菜单成功' };
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_entity_1.Menu)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MenuService);
//# sourceMappingURL=menu.service.js.map