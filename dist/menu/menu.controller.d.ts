import { MenuService } from './menu.service';
import { CreateMenuDto, DelMenuDto } from './dto/create-menu.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    findAll(): Promise<{
        data: {
            list: import("./entities/menu.entity").Menu[];
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
    remove(body: DelMenuDto): Promise<{
        message: string;
    }>;
}
