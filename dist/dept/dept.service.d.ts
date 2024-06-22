import { CreateDeptDto } from './dto/create-dept.dto';
import { Dept } from './entities/dept.entity';
import { Repository } from 'typeorm';
export declare class DeptService {
    private readonly dept;
    constructor(dept: Repository<Dept>);
    findAll(): Promise<{
        data: {
            list: Dept[];
        };
        message: string;
    }>;
    findOne(id: number): Promise<{
        data: Dept;
        message: string;
    }>;
    setDept(createDeptDto: CreateDeptDto): Promise<{
        message: string;
    }>;
    remove(ids: number[]): Promise<{
        message: string;
    }>;
}
