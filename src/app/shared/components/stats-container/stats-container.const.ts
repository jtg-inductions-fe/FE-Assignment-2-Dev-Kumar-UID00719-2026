export enum StatsCardKey {
    Revenue = 'revenue',
    Orders = 'orders',
    Completed = 'completed',
    Active = 'active',
}

export interface StatsCard {
    key: StatsCardKey;
    title: string;
    icon: string;
    colorClass: string;
    value: number;
}

export const STATS: StatsCard[] = [
    {
        key: StatsCardKey.Revenue,
        title: 'Total Revenue',
        icon: 'attach_money',
        colorClass: 'stats-card__icon--green',
        value: 0,
    },
    {
        key: StatsCardKey.Orders,
        title: 'Total Orders',
        icon: 'shopping_cart',
        colorClass: 'stats-card__icon--blue',
        value: 0,
    },
    {
        key: StatsCardKey.Completed,
        title: 'Completed Orders',
        icon: 'check_circle',
        colorClass: 'stats-card__icon--orange',
        value: 0,
    },
    {
        key: StatsCardKey.Active,
        title: 'Active Orders',
        icon: 'restaurant',
        colorClass: 'stats-card__icon--green',
        value: 0,
    },
];
