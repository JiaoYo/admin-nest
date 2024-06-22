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
exports.GlobalGuard = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const global_serice_1 = require("./global.serice");
const config = require('./config');
let GlobalGuard = class GlobalGuard {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['authorization'];
        const url = request.url;
        if (!config.whiteList.includes(url)) {
            const validRes = this.authService.validateToken(token?.replace('Bearer', '').trim() || '');
            if (!validRes) {
                return next.handle().pipe((0, operators_1.map)(() => {
                    return new common_1.HttpException('无token或token无效', common_1.HttpStatus.FORBIDDEN);
                }));
            }
        }
        return next.handle();
    }
};
exports.GlobalGuard = GlobalGuard;
exports.GlobalGuard = GlobalGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [global_serice_1.AuthService])
], GlobalGuard);
//# sourceMappingURL=global.guard.js.map