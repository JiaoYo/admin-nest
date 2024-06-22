export declare class CreateDictDto {
    id: number;
    createTime: Date;
    name: string;
    code: string;
    status: boolean;
    description: string;
}
export declare class GetDictinfo {
    id: number;
}
export declare class DelDictDto {
    ids: number[];
}
export declare class SetDictInfoDto {
    id: number;
    name: string;
    pid: number;
    value: number;
    status: boolean;
}
