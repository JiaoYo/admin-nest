export declare class SetUserDto {
    id: number;
    username: string;
    nickname: string;
    password: string;
    email: string;
    avatar: string;
    gender: boolean;
    disabled: boolean;
    createTime: Date;
    status: boolean;
    phone: number;
    roleIds: Array<string>;
    roleNames: string;
    deptId: number;
    deptName: string;
}
export declare class GetUserListDto {
    page: number;
    size: number;
    deptId: number;
    username: string;
}
export declare class DeleteUserDto {
    ids: number[];
}
