import { Role } from '@models/user';
import { SidenavItem, SidenavItemType } from '@models/sidebar-item';

export const SIDENAV_ITEMS: SidenavItem[] = [
    {
        id: 'overview',
        type: SidenavItemType.Link,
        label: 'Overview',
        icon: 'pie_chart',
        route: '/dashboard',
        roles: [Role.Admin, Role.Owner],
    },

    {
        id: 'restaurants',
        type: SidenavItemType.Link,
        label: 'Restaurants',
        icon: 'restaurant',
        route: '/restaurants',
        roles: [Role.Admin],
    },

    {
        id: 'messages',
        type: SidenavItemType.Link,
        label: 'Messages',
        icon: 'message',
        route: '/messages',
        roles: [Role.Admin, Role.Owner],
    },

    {
        id: 'divider-1',
        type: SidenavItemType.Divider,
        roles: [Role.Admin, Role.Owner],
    },

    {
        id: 'access-management',
        type: SidenavItemType.Tree,
        label: 'Access Management',
        icon: 'lock',
        roles: [Role.Admin],

        children: [
            {
                id: 'users',
                type: SidenavItemType.Link,
                label: 'Users',
                icon: 'person',
                route: '/access/users',
                roles: [Role.Admin],
            },

            {
                id: 'roles',
                type: SidenavItemType.Tree,
                label: 'Roles',
                icon: 'admin_panel_settings',
                roles: [Role.Admin],

                children: [
                    {
                        id: 'admin-role',
                        type: SidenavItemType.Link,
                        label: 'Administrators',
                        icon: 'shield',
                        route: '/access/roles/admin',
                        roles: [Role.Admin],
                    },

                    {
                        id: 'owner-role',
                        type: SidenavItemType.Link,
                        label: 'Restaurant Owners',
                        icon: 'store',
                        route: '/access/roles/owners',
                        roles: [Role.Admin],
                    },

                    {
                        id: 'permissions',
                        type: SidenavItemType.Tree,
                        label: 'Permissions',
                        icon: 'vpn_key',
                        roles: [Role.Admin],

                        children: [
                            {
                                id: 'menu-permissions',
                                type: SidenavItemType.Link,
                                label: 'Menu Permissions',
                                icon: 'restaurant_menu',
                                route: '/access/permissions/menu',
                                roles: [Role.Admin],
                            },

                            {
                                id: 'order-permissions',
                                type: SidenavItemType.Link,
                                label: 'Order Permissions',
                                icon: 'receipt_long',
                                route: '/access/permissions/orders',
                                roles: [Role.Admin],
                            },
                        ],
                    },
                ],
            },
        ],
    },

    {
        id: 'gallery',
        type: SidenavItemType.Link,
        label: 'Gallery',
        icon: 'collections',
        route: '/gallery',
        roles: [Role.Admin, Role.Owner],
    },

    {
        id: 'help',
        type: SidenavItemType.Link,
        label: 'Help',
        icon: 'help',
        route: '/help',
        roles: [Role.Admin, Role.Owner],
    },

    // ---------------- OWNER ----------------

    {
        id: 'menu',
        type: SidenavItemType.Tree,
        label: 'Menu',
        icon: 'restaurant_menu',
        roles: [Role.Owner],

        children: [
            {
                id: 'categories',
                type: SidenavItemType.Link,
                label: 'Categories',
                icon: 'category',
                route: '/menu/categories',
                roles: [Role.Owner],
            },

            {
                id: 'items',
                type: SidenavItemType.Tree,
                label: 'Items',
                icon: 'lunch_dining',
                roles: [Role.Owner],

                children: [
                    {
                        id: 'starters',
                        type: SidenavItemType.Link,
                        label: 'Starters',
                        icon: 'tapas',
                        route: '/menu/items/starters',
                        roles: [Role.Owner],
                    },

                    {
                        id: 'main-course',
                        type: SidenavItemType.Link,
                        label: 'Main Course',
                        icon: 'ramen_dining',
                        route: '/menu/items/main-course',
                        roles: [Role.Owner],
                    },

                    {
                        id: 'desserts',
                        type: SidenavItemType.Tree,
                        label: 'Desserts',
                        icon: 'icecream',
                        roles: [Role.Owner],

                        children: [
                            {
                                id: 'cakes',
                                type: SidenavItemType.Link,
                                label: 'Cakes',
                                icon: 'cake',
                                route: '/menu/items/desserts/cakes',
                                roles: [Role.Owner],
                            },

                            {
                                id: 'ice-creams',
                                type: SidenavItemType.Link,
                                label: 'Ice Creams',
                                icon: 'icecream',
                                route: '/menu/items/desserts/ice-creams',
                                roles: [Role.Owner],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
