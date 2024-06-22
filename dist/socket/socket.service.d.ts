import { Repository } from 'typeorm';
import { Socket } from './entities/socket.entity';
export declare class SocketService {
    private readonly socket;
    constructor(socket: Repository<Socket>);
    join(name: string, socket: any): void;
    create(body: any, client: any, socket: any): Promise<void>;
    gethistoryData(name: string, client: any): Promise<void>;
    withdrawMessage(id: number, sockets: any): Promise<void>;
}
