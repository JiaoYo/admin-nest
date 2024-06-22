import { CreateDictDto } from './dto/create-dict.dto';
import { Dict } from './entities/dict.entity';
import { DictInfo } from './entities/dictinfo.entity';
import { Repository } from 'typeorm';
export declare class DictService {
    private readonly dict;
    private readonly dictinfo;
    constructor(dict: Repository<Dict>, dictinfo: Repository<DictInfo>);
    set(createDictDto: CreateDictDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        data: {
            list: Dict[];
            total: number;
        };
    }>;
    del(ids: number[]): Promise<{
        message: string;
    }>;
    getDictInfo(body: any): Promise<{
        data: {
            list: DictInfo[];
            total: number;
        };
        message: string;
    }>;
    update(body: any): Promise<{
        message: string;
    }>;
    remove(ids: number[]): Promise<{
        message: string;
    }>;
}
