import { Repository } from 'typeorm';
import { User } from './user/entities/user.entity';
export declare class AppService {
    private readonly user;
    constructor(user: Repository<User>);
    login(data: any): Promise<{
        data: {
            token: string;
        };
        message: string;
    }>;
    regUser(data: any): Promise<{
        message: string;
    }>;
    setPassword(data: any): Promise<{
        message: string;
    }>;
    setAvatar(data: any): Promise<{
        message: string;
    }>;
}
