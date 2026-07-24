export const APP_LOGO = 'assets/images/icons/main-logo.svg';

export interface FooterSocial {
    alt: string;
    icon: string;
    link: string;
}

export const FOOTER_SOCIALS: FooterSocial[] = [
    {
        alt: 'facebook logo',
        icon: 'assets/images/icons/Vector.svg',
        link: '#',
    },
    {
        alt: 'twitter logo',
        icon: 'assets/images/icons/Vector (1).svg',
        link: '#',
    },
    {
        alt: 'github logo',
        icon: 'assets/images/icons/Vector (2).svg',
        link: '#',
    },
    {
        alt: 'internet logo',
        icon: 'assets/images/icons/Vector (3).svg',
        link: '#',
    },
];

export const ROUTE_PATH = {
    LOGIN: 'login',
    DASHBOARD: 'dashboard',
    RESTAURANTS: 'restaurants',
    ADD_RESTAURANTS: 'restaurants/add',
    EDIT_RESTAURANTS: 'restaurants/edit',
    ERROR: 'error',
    UNKNOWN: '**',
};

export const RESTAURANT_NAMES = {
    ALL_RESTAURANTS: 'All Restaurants',
    PIZZA_PALACE: 'Pizza Palace',
    BURGER_BISTRO: 'Burger Bistro',
    SUSHI_ZEN: 'Sushi Zen',
};
