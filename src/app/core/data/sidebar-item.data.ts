import { Role } from '@models/user';
import { SidenavItem } from '@models/sidebar-item';
import { Divider } from '@models/sidebar-item';

export const SIDENAV_ITEMS: SidenavItem[] = [
    {
        id: 'overview',
        label: 'Overview',
        icon: 'pie_chart',
        route: '/dashboard',
        roles: [Role.Admin, Role.Owner],
    },

    {
        id: 'restaurants',
        label: 'Restaurants',
        icon: 'restaurant',
        route: '/restaurants',
        roles: [Role.Admin],
    },

    {
        id: 'messages',
        label: 'Messages',
        icon: 'message',
        route: '/messages',
        roles: [Role.Admin, Role.Owner],
    },

    {
        id: 'access-management',
        label: 'Access Management',
        icon: 'lock',
        roles: [Role.Admin],

        children: [
            {
                id: 'users',
                label: 'Users',
                icon: 'person',
                route: '/access/users',
                roles: [Role.Admin],
            },

            {
                id: 'roles',
                label: 'Roles',
                icon: 'admin_panel_settings',
                roles: [Role.Admin],

                children: [
                    {
                        id: 'admin-role',
                        label: 'Administrators',
                        icon: 'shield',
                        route: '/access/roles/admin',
                        roles: [Role.Admin],
                    },

                    {
                        id: 'owner-role',
                        label: 'Restaurant Owners',
                        icon: 'store',
                        route: '/access/roles/owners',
                        roles: [Role.Admin],
                    },

                    {
                        id: 'permissions',
                        label: 'Permissions',
                        icon: 'vpn_key',
                        roles: [Role.Admin],

                        children: [
                            {
                                id: 'menu-permissions',
                                label: 'Menu Permissions',
                                icon: 'restaurant_menu',
                                route: '/access/permissions/menu',
                                roles: [Role.Admin],
                            },

                            {
                                id: 'order-permissions',
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
        label: 'Gallery',
        icon: 'collections',
        route: '/gallery',
        roles: [Role.Admin, Role.Owner],
    },

    {
        id: 'help',
        label: 'Help',
        icon: 'help',
        route: '/help',
        roles: [Role.Admin, Role.Owner],
    },

    // ---------------- OWNER ----------------

    {
        id: 'menu',
        label: 'Menu',
        icon: 'restaurant_menu',
        roles: [Role.Owner],

        children: [
            {
                id: 'categories',
                label: 'Categories',
                icon: 'category',
                route: '/menu/categories',
                roles: [Role.Owner],
            },

            {
                id: 'items',
                label: 'Items',
                icon: 'lunch_dining',
                roles: [Role.Owner],

                children: [
                    {
                        id: 'starters',
                        label: 'Starters',
                        icon: 'tapas',
                        route: '/menu/items/starters',
                        roles: [Role.Owner],
                    },

                    {
                        id: 'main-course',
                        label: 'Main Course',
                        icon: 'ramen_dining',
                        route: '/menu/items/main-course',
                        roles: [Role.Owner],
                    },

                    {
                        id: 'desserts',
                        label: 'Desserts',
                        icon: 'icecream',
                        roles: [Role.Owner],

                        children: [
                            {
                                id: 'cakes',
                                label: 'Cakes',
                                icon: 'cake',
                                route: '/menu/items/desserts/cakes',
                                roles: [Role.Owner],
                            },

                            {
                                id: 'ice-creams',
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
