import { SocketService } from './socket.service';
import { Server, Socket } from 'socket.io';
export declare class SocketGateway {
    private readonly socketService;
    constructor(socketService: SocketService);
    server: Server;
    gethistoryData(name: string, client: Socket): void;
    join(name: string, client: Socket): void;
    create(body: any): Promise<void>;
    withdrawMessage(id: number): Promise<void>;
}
