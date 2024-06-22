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
exports.DictService = void 0;
const common_1 = require("@nestjs/common");
const dict_entity_1 = require("./entities/dict.entity");
const dictinfo_entity_1 = require("./entities/dictinfo.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let DictService = class DictService {
    constructor(dict, dictinfo) {
        this.dict = dict;
        this.dictinfo = dictinfo;
    }
    async set(createDictDto) {
        const qb = await this.dict.createQueryBuilder('dict');
        if (createDictDto.id) {
            qb.update().set(createDictDto).where('id = :id', { id: createDictDto.id }).execute();
            return { message: '编辑成功' };
        }
        delete createDictDto.id;
        createDictDto.createTime = new Date();
        qb.insert().into(dict_entity_1.Dict).values(createDictDto).execute();
        return { message: '添加成功' };
    }
    async findAll() {
        const qb = await this.dict.createQueryBuilder('dict');
        const qbinfo = await this.dictinfo.createQueryBuilder('dictinfo');
        const res = await qb.getMany();
        const total = await qb.getCount();
        const childrenQueriesPromises = res.map(async (item) => {
            item.infoList = await qbinfo.where('pid = :pid', { pid: item.id }).getMany();
        });
        await Promise.all(childrenQueriesPromises);
        return { data: { list: res, total: total } };
    }
    async del(ids) {
        const qb = await this.dict.createQueryBuilder('dict');
        qb.delete().from(dict_entity_1.Dict).where('id in (:...ids)', { ids: ids }).execute();
        return { message: '删除成功' };
    }
    async getDictInfo(body) {
        const qb = await this.dictinfo.createQueryBuilder('dictinfo');
        qb.where('pid = :dictId', { dictId: body.id });
        const res = await qb.getMany();
        const count = await qb.getCount();
        return { data: { list: res, total: count }, message: '获取详情成功' };
    }
    async update(body) {
        const qb = await this.dictinfo.createQueryBuilder('dictinfo');
        if (body.id) {
            qb.update().set(body).where('id = :id', { id: body.id }).execute();
            return { message: '编辑成功' };
        }
        delete body.id;
        qb.insert().into(dictinfo_entity_1.DictInfo).values(body).execute();
        return { message: '添加成功' };
    }
    async remove(ids) {
        const qb = await this.dictinfo.createQueryBuilder('dictinfo');
        qb.delete().from(dictinfo_entity_1.DictInfo).where('id in(:...ids)', { ids: ids }).execute();
        return { message: '删除成功' };
    }
};
exports.DictService = DictService;
exports.DictService = DictService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dict_entity_1.Dict)),
    __param(1, (0, typeorm_1.InjectRepository)(dictinfo_entity_1.DictInfo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DictService);
//# sourceMappingURL=dict.service.js.map