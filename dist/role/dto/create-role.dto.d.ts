export declare class CreateRoleDto {
    id: number;
    createTime: Date;
    name: string;
    code: string;
    status: boolean;
    description: string;
    menus: number[];
}
export declare class GetRoleListDto {
    page: number;
    size: number;
    name: string;
    status: boolean;
}
export declare class setRoleMenu {
    menus: number[];
    id: number;
}
export declare class DelRoleDto {
    ids: number[];
}
