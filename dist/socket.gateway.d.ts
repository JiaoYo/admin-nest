import { Server, Socket } from 'socket.io';
export declare class SocketGateway {
    constructor();
    server: Server;
    gethistoryData(body: any): string;
    handleMessage(body: any, client: Socket): void;
    handleLeave(body: any, client: Socket): void;
    handleGetRoomUsers(body: any, client: Socket): void;
}
