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
exports.DictController = void 0;
const common_1 = require("@nestjs/common");
const dict_service_1 = require("./dict.service");
const create_dict_dto_1 = require("./dto/create-dict.dto");
const swagger_1 = require("@nestjs/swagger");
let DictController = class DictController {
    constructor(dictService) {
        this.dictService = dictService;
    }
    set(createDictDto) {
        return this.dictService.set(createDictDto);
    }
    findAll() {
        return this.dictService.findAll();
    }
    del(body) {
        return this.dictService.del(body.ids);
    }
    getDictInfo(body) {
        return this.dictService.getDictInfo(body);
    }
    update(body) {
        return this.dictService.update(body);
    }
    remove(body) {
        return this.dictService.remove(body.ids);
    }
};
exports.DictController = DictController;
__decorate([
    (0, common_1.Post)('set'),
    (0, swagger_1.ApiOperation)({ summary: '设置字典', description: '编辑/添加字典有id编辑无id添加' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dict_dto_1.CreateDictDto]),
    __metadata("design:returntype", void 0)
], DictController.prototype, "set", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '获取字典列表' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DictController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('del'),
    (0, swagger_1.ApiOperation)({ summary: '删除字典' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dict_dto_1.DelDictDto]),
    __metadata("design:returntype", void 0)
], DictController.prototype, "del", null);
__decorate([
    (0, common_1.Post)('info'),
    (0, swagger_1.ApiOperation)({ summary: '获取字典详情' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dict_dto_1.GetDictinfo]),
    __metadata("design:returntype", void 0)
], DictController.prototype, "getDictInfo", null);
__decorate([
    (0, common_1.Post)('info/set'),
    (0, swagger_1.ApiOperation)({ summary: '设置字典详情' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dict_dto_1.SetDictInfoDto]),
    __metadata("design:returntype", void 0)
], DictController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('info/del'),
    (0, swagger_1.ApiOperation)({ summary: '删除字典详情数据' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dict_dto_1.DelDictDto]),
    __metadata("design:returntype", void 0)
], DictController.prototype, "remove", null);
exports.DictController = DictController = __decorate([
    (0, swagger_1.ApiTags)('字典'),
    (0, common_1.Controller)('dict'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [dict_service_1.DictService])
], DictController);
//# sourceMappingURL=dict.controller.js.map