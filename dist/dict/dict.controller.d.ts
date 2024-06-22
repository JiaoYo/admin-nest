import { DictService } from './dict.service';
import { CreateDictDto, GetDictinfo, DelDictDto, SetDictInfoDto } from './dto/create-dict.dto';
export declare class DictController {
    private readonly dictService;
    constructor(dictService: DictService);
    set(createDictDto: CreateDictDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<{
        data: {
            list: import("./entities/dict.entity").Dict[];
            total: number;
        };
    }>;
    del(body: DelDictDto): Promise<{
        message: string;
    }>;
    getDictInfo(body: GetDictinfo): Promise<{
        data: {
            list: import("./entities/dictinfo.entity").DictInfo[];
            total: number;
        };
        message: string;
    }>;
    update(body: SetDictInfoDto): Promise<{
        message: string;
    }>;
    remove(body: DelDictDto): Promise<{
        message: string;
    }>;
}
