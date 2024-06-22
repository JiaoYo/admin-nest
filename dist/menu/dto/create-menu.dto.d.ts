export declare class CreateMenuDto {
    id: number;
    pid: number;
    path: string;
    component: string;
    redirect: string;
    type: string;
    title: string;
    svgIcon: string;
    icon: string;
    keepAlive: boolean;
    hidden: number;
    sort: string;
    activeMenu: string;
    breadcrumb: number;
    status: string;
    roles: string;
    permission: string;
    showInTabs: number;
    alwaysShow: number;
    affix: number;
}
export declare class DelMenuDto {
    id: number;
}
