import { RoleService } from './role.service';
import { CreateRoleDto, GetRoleListDto, setRoleMenu, DelRoleDto } from './dto/create-role.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    findAll(body: GetRoleListDto): Promise<{
        data: {
            list: import("./entities/role.entity").Role[];
            total: number;
        };
        message: string;
    }>;
    findOne(id: number): Promise<{
        data: import("./entities/role.entity").Role;
        message: string;
    }>;
    setRoleMenu(body: setRoleMenu): Promise<{
        message: string;
    }>;
    getRoleInfo(id: number): Promise<{
        data: import("./entities/role.entity").Role;
        message: string;
    }>;
    setRoleInfo(body: CreateRoleDto): Promise<{
        message: string;
    }>;
    remove(body: DelRoleDto): Promise<{
        message: string;
    }>;
}
