import { Role } from '@models/user';

export interface SidenavItem {
    id: string;
    type: SidenavItemType;
    roles: Role[];
    label?: string;
    icon?: string;
    route?: string;
    children?: SidenavItem[];
    badge?: number;
}

export enum SidenavItemType {
    Link,
    Tree,
    Divider,
}
