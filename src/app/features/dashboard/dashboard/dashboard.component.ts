import { Component, OnInit, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AuthenticationService } from '@services/authentication.service';
import { DashboardService } from '@services/dashboard.service';
import { Role } from '@models/user';
import { Restaurant } from '@models/resturant';
import { CardListData } from '@shared/components/data-list-card/data-list-card.types';
import { HEADER_DATA } from '@shared/components/layout-header/layout-header.const';
import RestaurantsData from '@data/restaurants.data.json';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    private readonly restaurants: Restaurant[] =
        RestaurantsData.restaurants as Restaurant[];

    topCustomers?: CardListData;
    topDishes?: CardListData;
    isAdmin = false;
    headerData = HEADER_DATA;

    constructor(
        private dashboardService: DashboardService,
        private authenticationService: AuthenticationService,
        private destroyRef: DestroyRef,
    ) {}

    ngOnInit(): void {
        const user = this.authenticationService.getCurrentUser();

        this.isAdmin = user?.role === Role.Admin;

        if (!this.isAdmin) {
            const restaurant = this.restaurants.find((restaurant) =>
                restaurant.owners.some((owner) => owner.email === user?.email),
            );

            this.dashboardService.setCurrentRestaurant(restaurant?.name ?? '');
        }

        this.dashboardService.currentRestaurant$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((restaurantName) => {
                this.topCustomers =
                    this.dashboardService.getTopCustomers(restaurantName);
                this.topDishes =
                    this.dashboardService.getTopDishes(restaurantName);
            });
    }
}
