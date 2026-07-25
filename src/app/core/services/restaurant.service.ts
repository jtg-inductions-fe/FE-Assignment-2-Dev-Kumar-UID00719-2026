import { Injectable } from '@angular/core';

import { RestaurantTableData, Restaurant } from '@models/resturant';
import restaurantData from '@data/restaurants.data.json';
import restaurantTableData from '@data/restaurantTableData.json';

@Injectable({
    providedIn: 'root',
})
export class RestaurantService {
    private restaurants: Restaurant[] =
        restaurantData.restaurants as Restaurant[];
    private restaurantTableData: RestaurantTableData[] =
        restaurantTableData.RESTAURANT_TABLE_DATA as RestaurantTableData[];

    getRestaurants(): RestaurantTableData[] {
        return this.restaurantTableData;
    }

    addRestaurant(restaurant: RestaurantTableData): void {
        this.restaurantTableData.push(restaurant);
    }

    updateRestaurant(restaurant: RestaurantTableData): void {
        const index = this.restaurantTableData.findIndex((item) => {
            return item.id === restaurant.id;
        });
        this.restaurantTableData[index] = restaurant;
    }
}
