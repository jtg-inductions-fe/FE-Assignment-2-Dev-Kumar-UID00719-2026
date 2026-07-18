import { Role } from '@models/user';

export interface SidenavItem {
    id: string;
    type: SidenavItemType;
    label?: string;
    icon?: string;
    route?: string;
    children?: SidenavItem[];
    roles: Role[];
}

export enum SidenavItemType {
    Link = 'link',
    Tree = 'tree',
    Divider = 'divider',
}

export interface Divider {
    type: string;
}
