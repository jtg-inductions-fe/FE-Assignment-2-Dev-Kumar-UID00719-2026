import { Role } from '@models/user';

export interface SidenavItem {
    id: string;
    label: string;
    icon: string;
    route?: string;
    children?: SidenavItem[];
    roles: Role[];
}

export interface Divider {
    type: string;
}
