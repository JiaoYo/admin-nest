import { AppService } from './app.service';
declare class loginDto {
    username: string;
    password: string;
}
declare class regUserDto {
    username: string;
    password: string;
}
declare class setPsdDto {
    id: number;
    oldPassword: string;
    newPassword: string;
}
declare class setAvatarDto {
    id: number;
    avatar: string;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    login(data: loginDto): Promise<{
        data: {
            token: string;
        };
        message: string;
    }>;
    register(data: regUserDto): Promise<{
        message: string;
    }>;
    logout(): {
        message: string;
    };
    setPassword(data: setPsdDto): Promise<{
        message: string;
    }>;
    setAvatar(data: setAvatarDto): Promise<{
        message: string;
    }>;
}
export {};
