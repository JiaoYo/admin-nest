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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
class loginDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '用户名', example: 'admin' }),
    __metadata("design:type", String)
], loginDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '密码', example: '123456' }),
    __metadata("design:type", String)
], loginDto.prototype, "password", void 0);
class regUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '用户名', example: 'admin' }),
    __metadata("design:type", String)
], regUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '密码', example: '123456' }),
    __metadata("design:type", String)
], regUserDto.prototype, "password", void 0);
class setPsdDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID' }),
    __metadata("design:type", Number)
], setPsdDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '密码', example: '123456' }),
    __metadata("design:type", String)
], setPsdDto.prototype, "oldPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '新密码', example: '123456' }),
    __metadata("design:type", String)
], setPsdDto.prototype, "newPassword", void 0);
class setAvatarDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID' }),
    __metadata("design:type", Number)
], setAvatarDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '头像' }),
    __metadata("design:type", String)
], setAvatarDto.prototype, "avatar", void 0);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    login(data) {
        return this.appService.login(data);
    }
    register(data) {
        return this.appService.regUser(data);
    }
    logout() {
        return { message: '退出成功' };
    }
    setPassword(data) {
        return this.appService.setPassword(data);
    }
    setAvatar(data) {
        return this.appService.setAvatar(data);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: '登录' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('regUser'),
    (0, swagger_1.ApiOperation)({ summary: '注册', description: '创建一个用户' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [regUserDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('logout'),
    (0, swagger_1.ApiOperation)({ summary: '登出' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('updatePassword'),
    (0, swagger_1.ApiOperation)({ summary: '设置密码' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [setPsdDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "setPassword", null);
__decorate([
    (0, common_1.Post)('setAvatar'),
    (0, swagger_1.ApiOperation)({ summary: '设置头像' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [setAvatarDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "setAvatar", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)('登录登出'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map