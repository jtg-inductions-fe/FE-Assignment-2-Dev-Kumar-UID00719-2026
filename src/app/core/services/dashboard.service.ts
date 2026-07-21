import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { RESTAURANTS } from '@data/restaurants';
import { CUSTOMERS } from '@data/customers';
import { ORDERS } from '@data/orders';
import { Order, OrderStatus } from '@models/resturant';
import { CardListData } from '@models/stats-card-data';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    private currentRestaurantSubject = new BehaviorSubject<string>(
        'All Restaurants',
    );
    currentRestaurant$ = this.currentRestaurantSubject.asObservable();

    setCurrentRestaurant(name: string): void {
        this.currentRestaurantSubject.next(name);
    }

    getRestaurantNames(): string[] {
        return RESTAURANTS.map((restaurant) => restaurant.name);
    }

    getDashboardStats(restaurantName?: string) {
        const orders = this.getOrders(restaurantName);

        return {
            totalRevenue: this.getTotalRevenue(orders),
            totalOrders: this.getTotalOrders(orders),
            completedOrders: this.getCompletedOrders(orders),
            activeOrders: this.getTotalActiveOrders(orders),
        };
    }

    private getOrders(restaurantName?: string): Order[] {
        if (!restaurantName || restaurantName === 'All Restaurants') {
            return ORDERS;
        }

        const restaurant = RESTAURANTS.find(
            (restaurant) => restaurant.name === restaurantName,
        );

        if (!restaurant) {
            return [];
        }

        return ORDERS.filter((order) => order.restaurantId === restaurant.id);
    }

    getTotalRevenue(orders: Order[]): number {
        const revenue = orders.reduce(
            (sum, order) => sum + order.totalPrice,
            0,
        );

        return revenue;
    }

    getTotalOrders(orders: Order[]): number {
        return orders.length;
    }

    getCompletedOrders(orders: Order[]): number {
        return orders.filter((order) => order.status === OrderStatus.Completed)
            .length;
    }

    getTotalActiveOrders(orders: Order[]): number {
        return orders.filter(
            (order) =>
                order.status === OrderStatus.Pending ||
                order.status === OrderStatus.Preparing,
        ).length;
    }

    getTopCustomers(restaurantName?: string): CardListData {
        const orders = this.getOrders(restaurantName);

        const customerIds = [
            ...new Set(orders.map((order) => order.customerId)),
        ];

        const topCustomers = customerIds.map((customerId) => {
            const customerOrders = orders.filter(
                (order) => order.customerId === customerId,
            );

            const totalSpent = customerOrders.reduce(
                (sum, order) => sum + order.totalPrice,
                0,
            );

            const customer = CUSTOMERS.find(
                (customer) => customer.id === customerId,
            )!;

            return {
                title: customer.name,
                subtitle: `${customerOrders.length} Orders`,
                trailingText: `$${totalSpent.toFixed(2)}`,
                image: customer.profileImageUrl,
                totalSpent,
            };
        });

        topCustomers.sort((a, b) => b.totalSpent - a.totalSpent);

        return {
            heading: 'Top Customers',
            items: topCustomers.slice(0, 5).map((customer) => ({
                title: customer.title,
                subtitle: customer.subtitle,
                trailingText: customer.trailingText,
                image: customer.image,
            })),
        };
    }

    getTopDishes(restaurantName?: string): CardListData {
        const orders = this.getOrders(restaurantName).filter(
            (order) => order.status === OrderStatus.Completed,
        );

        const dishNames = [
            ...new Set(
                orders.flatMap((order) =>
                    order.items.map((item) => item.dishName),
                ),
            ),
        ];

        const topDishes = dishNames.map((dishName) => {
            const completedOrders = orders.filter((order) =>
                order.items.some((item) => item.dishName === dishName),
            );

            const restaurant = RESTAURANTS.find(
                (restaurant) =>
                    restaurant.id === completedOrders[0].restaurantId,
            )!;

            return {
                title: dishName,
                subtitle: restaurant.name,
                trailingText: `${completedOrders.length} Orders`,
                totalOrders: completedOrders.length,
            };
        });

        topDishes.sort((a, b) => b.totalOrders - a.totalOrders);

        return {
            heading: 'Top Dishes',
            items: topDishes.slice(0, 5).map((dish) => ({
                title: dish.title,
                subtitle: dish.subtitle,
                trailingText: dish.trailingText,
            })),
        };
    }
}
