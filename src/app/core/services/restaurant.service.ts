import { Injectable } from '@angular/core';

import { RestaurantTableData } from '@models/resturant';
import { RESTAURANTS } from '@data/restaurants';

@Injectable({
    providedIn: 'root',
})
export class RestaurantService {
    getRestaurants(): RestaurantTableData[] {
        return RESTAURANTS.map((restaurant) => ({
            id: restaurant.id,
            restaurant: restaurant.name,
            address: restaurant.address,
            owners: restaurant.owners.map((owner) => owner.email),
        }));
    }
}
