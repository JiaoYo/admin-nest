import { CreateMenuDto } from './dto/create-menu.dto';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';
export declare class MenuService {
    private readonly menu;
    constructor(menu: Repository<Menu>);
    findAll(): Promise<{
        data: {
            list: Menu[];
        };
        message: string;
    }>;
    findOne(id: number): Promise<{
        data: any;
        message: string;
    }>;
    setdate(createMenuDto: CreateMenuDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
