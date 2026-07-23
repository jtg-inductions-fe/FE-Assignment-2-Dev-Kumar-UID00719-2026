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
    Link,
    Tree,
    Divider,
}

export interface Divider {
    type: string;
}
