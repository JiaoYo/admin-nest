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
exports.Socket = void 0;
const typeorm_1 = require("typeorm");
let Socket = class Socket {
};
exports.Socket = Socket;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Socket.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Socket.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Socket.prototype, "formName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Socket.prototype, "formId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, default: 'http://www.jy2002.love/assets/infourl-3lzKe2gJ.png' }),
    __metadata("design:type", String)
], Socket.prototype, "formUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Socket.prototype, "toName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Socket.prototype, "toId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, default: 'http://www.jy2002.love/assets/infourl-3lzKe2gJ.png' }),
    __metadata("design:type", String)
], Socket.prototype, "toUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => "CURRENT_TIMESTAMP " }),
    __metadata("design:type", Date)
], Socket.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, default: null }),
    __metadata("design:type", String)
], Socket.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "tinyint", default: 0 }),
    __metadata("design:type", Number)
], Socket.prototype, "status", void 0);
exports.Socket = Socket = __decorate([
    (0, typeorm_1.Entity)('ev_message')
], Socket);
//# sourceMappingURL=socket.entity.js.map