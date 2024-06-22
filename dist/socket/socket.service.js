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
exports.SocketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const socket_entity_1 = require("./entities/socket.entity");
let SocketService = class SocketService {
    constructor(socket) {
        this.socket = socket;
    }
    join(name, socket) {
        socket.join(name);
    }
    async create(body, client, socket) {
        const formatMessage = (form, to, message, type) => {
            return {
                formName: form.nickname,
                formId: form.id,
                formUrl: form.avatar,
                toUrl: to.avatar,
                toId: to.id,
                message,
                createTime: new Date(),
                toName: to.nickname,
                type
            };
        };
        const obj = formatMessage(body[0], body[1], body[2], body[3]);
        const result = await this.socket
            .createQueryBuilder()
            .insert()
            .into(socket_entity_1.Socket)
            .values(obj)
            .execute();
        const newSocketId = result.identifiers[0].id;
        obj['id'] = newSocketId;
        if (body[3] == "user") {
            socket.emit('message1', newSocketId);
            socket.broadcast.to(body[1].nickname).emit('message', obj);
        }
        else {
            client.to('room').emit('message', obj);
        }
    }
    async gethistoryData(name, client) {
        const socket = this.socket.createQueryBuilder('socket');
        const res = await socket.getMany();
        socket.where('formName = :formName OR toName = :formName ', { formName: name });
        let result = await socket.getMany();
        const userMessages = result.filter(item => item.toName !== "聊天室");
        const roomMessages = res.filter(item => item.toName === "聊天室");
        client.emit('historyData', userMessages, roomMessages);
    }
    async withdrawMessage(id, sockets) {
        const socket = this.socket.createQueryBuilder('socket');
        await socket.update().set({ status: 1, message: '' }).where('id = :id', { id }).execute();
        sockets.emit('withdrawMessageAll');
    }
};
exports.SocketService = SocketService;
exports.SocketService = SocketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(socket_entity_1.Socket)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SocketService);
//# sourceMappingURL=socket.service.js.map