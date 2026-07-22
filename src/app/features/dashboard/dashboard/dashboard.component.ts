import { Component, OnInit, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CardListData } from '@models/stats-card-data';
import { AuthenticationService } from '@services/authentication.service';
import { DashboardService } from '@services/dashboard.service';
import { Role } from '@models/user';
<<<<<<< HEAD
import RestaurantsData from '@data/restaurants.data.json';
import { Restaurant } from '@models/resturant';
=======
import { RESTAURANTS } from '@data/restaurants';
import { OrderTableData } from '@models/resturant';
import { TableColumnType } from '@data/table-data';
import { HEADER_DATA } from '@constants/layoutHeaderData';
>>>>>>> 8e44592 ([DS_A2_07]: completed restaurants page)

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    private readonly restaurants: Restaurant[] =
        RestaurantsData.restaurants as Restaurant[];

    topCustomers!: CardListData;
    topDishes!: CardListData;
    isAdmin = false;

    /**
    orders: OrderTableData[] = [];
    headerData = HEADER_DATA;

    columns = [
        {
            key: 'id',
            label: 'Order ID',
            type: TableColumnType.Text,
        },
        {
            key: 'customer',
            label: 'Customer',
            type: TableColumnType.Text,
        },
        {
            key: 'items',
            label: 'Items',
            type: TableColumnType.Text,
        },
        {
            key: 'amount',
            label: 'Amount',
            type: TableColumnType.Text,
        },
        {
            key: 'status',
            label: 'Status',
            type: TableColumnType.Chip,
        },
        {
            key: 'actions',
            label: 'Actions',
            type: TableColumnType.Buttons,
        },
    ];
    */

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
                // this.orders = this.dashboardService.getActiveOrders(restaurantName);
            });
    }
}
