export interface Restaurant {
    id: number;
    name: string;
    address: string;
    owners: RestaurantOwner[];
    dishes: Dish[];
}

export interface Dish {
    name: string;
    price: number;
}

export interface Customer {
    id: number;
    name: string;
    email: string;
    profileImageUrl: string;
}

export enum OrderStatus {
    Pending = 'Pending',
    Preparing = 'Preparing',
    Completed = 'Completed',
    Rejected = 'Rejected',
}

export interface OrderItem {
    dishName: string;
    quantity: number;
    unitPrice: number;
}

export interface Order {
    id: number;
    restaurantId: number;
    customerId: number;
    status: OrderStatus;
    items: OrderItem[];
    totalPrice: number;
}

export interface RestaurantOwner {
    name: string;
    email: string;
    phone: string;
}

export interface OrderTableData {
    id: number;
    restaurant: string;
    customer: string;
    items: string;
    amount: string;
    status: OrderStatus;
}

export interface RestaurantTableData {
    id: number;
    restaurant: string;
    address: string;
    owners: string[];
}
