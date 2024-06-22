import { UserService } from './user.service';
import { SetUserDto, GetUserListDto, DeleteUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: SetUserDto): Promise<{
        message: string;
    }>;
    findAll(body: GetUserListDto): Promise<any>;
    findOne(id: number): Promise<{
        data: import("./entities/user.entity").User;
        message: string;
    }>;
    getInfo(header: any): Promise<{
        data: any;
        message: string;
    }>;
    remove(body: DeleteUserDto): Promise<{
        message: string;
    }>;
}
