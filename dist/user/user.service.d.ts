import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Menu } from '../menu/entities/menu.entity';
import { Role } from '../role/entities/role.entity';
export declare class UserService {
    private readonly user;
    private readonly menu;
    private readonly role;
    constructor(user: Repository<User>, menu: Repository<Menu>, role: Repository<Role>);
    create(data: Partial<User>): Promise<{
        message: string;
    }>;
    findAll(body: any): Promise<any>;
    findOne(id: number): Promise<{
        data: User;
        message: string;
    }>;
    getInfo(token: string): Promise<{
        data: any;
        message: string;
    }>;
    remove(ids: number[]): Promise<{
        message: string;
    }>;
}
