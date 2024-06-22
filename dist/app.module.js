"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const menu_module_1 = require("./menu/menu.module");
const role_module_1 = require("./role/role.module");
const dict_module_1 = require("./dict/dict.module");
const dept_module_1 = require("./dept/dept.module");
const upload_module_1 = require("./upload/upload.module");
const typeorm_1 = require("@nestjs/typeorm");
const global_guard_1 = require("./global.guard");
const jwt_1 = require("@nestjs/jwt");
const global_serice_1 = require("./global.serice");
const socket_module_1 = require("./socket/socket.module");
const user_entity_1 = require("./user/entities/user.entity");
const config = require('./config');
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: config.jwtSecretKey,
                signOptions: {
                    expiresIn: config.expiresIn,
                }
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'admin123',
                database: '007',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
                timezone: '+08:00',
                autoLoadEntities: true,
            }),
            user_module_1.UserModule, menu_module_1.MenuModule, role_module_1.RoleModule, dict_module_1.DictModule, dept_module_1.DeptModule, upload_module_1.UploadModule, socket_module_1.SocketModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [{
                provide: core_1.APP_INTERCEPTOR,
                useClass: global_guard_1.GlobalGuard,
            }, app_service_1.AppService, global_serice_1.AuthService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map