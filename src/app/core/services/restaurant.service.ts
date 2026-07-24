import { Injectable } from '@angular/core';

import { RestaurantTableData } from '@models/resturant';
import { Restaurant } from '@models/resturant';
import restaurantData from '@data/restaurants.data.json';

@Injectable({
    providedIn: 'root',
})
export class RestaurantService {
    private restaurants: Restaurant[] =
        restaurantData.restaurants as Restaurant[];

    getRestaurants(): RestaurantTableData[] {
        return this.restaurants.map((restaurant) => ({
            id: restaurant.id,
            restaurant: restaurant.name,
            address: restaurant.address,
            owners: restaurant.owners.map((owner) => owner.email),
        }));
    }
}
