import { Repository } from 'typeorm';
import { Socket } from './entities/socket.entity';
export declare class SocketService {
    private readonly socket;
    constructor(socket: Repository<Socket>);
    create(body: any, client: any): Promise<void>;
    gethistoryData(name: string, client: any): Promise<void>;
    withdrawMessage(id: number, client: any): Promise<void>;
}
