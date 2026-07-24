import { Injectable } from '@angular/core';

import { RestaurantTableData } from '@models/resturant';
import { Restaurant } from '@models/resturant';
import restaurantData from '@data/restaurants.data.json';
import { RESTAURANT_TABLE_DATA } from '@data/restaurantTableData';

@Injectable({
    providedIn: 'root',
})
export class RestaurantService {
    private restaurants: Restaurant[] =
        restaurantData.restaurants as Restaurant[];

    getRestaurants(): RestaurantTableData[] {
        return RESTAURANT_TABLE_DATA;
    }

    addRestaurant(restaurant: RestaurantTableData): void {
        console.log(restaurant);
        RESTAURANT_TABLE_DATA.push(restaurant);
    }

    updateRestaurant(restaurant: RestaurantTableData): void {
        const index = RESTAURANT_TABLE_DATA.findIndex((item) => {
            item.id === restaurant.id;
        });
        RESTAURANT_TABLE_DATA[index] = restaurant;
    }
}
