import { DeptService } from './dept.service';
import { CreateDeptDto, DelDeptDto } from './dto/create-dept.dto';
export declare class DeptController {
    private readonly deptService;
    constructor(deptService: DeptService);
    findAll(): Promise<{
        data: {
            list: import("./entities/dept.entity").Dept[];
        };
        message: string;
    }>;
    findOne(id: string): Promise<{
        data: import("./entities/dept.entity").Dept;
        message: string;
    }>;
    set(createDeptDto: CreateDeptDto): Promise<{
        message: string;
    }>;
    remove(body: DelDeptDto): Promise<{
        message: string;
    }>;
}
