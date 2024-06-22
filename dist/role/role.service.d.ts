import { setRoleMenu } from './dto/create-role.dto';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
export declare class RoleService {
    private readonly role;
    constructor(role: Repository<Role>);
    findAll(body: any): Promise<{
        data: {
            list: Role[];
            total: number;
        };
        message: string;
    }>;
    findOne(id: number): Promise<{
        data: Role;
        message: string;
    }>;
    setRoleMenu(body: setRoleMenu): Promise<{
        message: string;
    }>;
    getRoleInfo(id: number): Promise<{
        data: Role;
        message: string;
    }>;
    setRoleInfo(body: Partial<Role>): Promise<{
        message: string;
    }>;
    remove(ids: number[]): Promise<{
        message: string;
    }>;
}
