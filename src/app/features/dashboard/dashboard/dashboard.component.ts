import { Component, OnInit, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CardListData } from '@models/stats-card-data';
import { DashboardService } from '@services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    topCustomers!: CardListData;
    topDishes!: CardListData;

    constructor(
        private dashboardService: DashboardService,
        private destroyRef: DestroyRef,
    ) {}

    ngOnInit(): void {
        this.dashboardService.currentRestaurant$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((restaurantName) => {
                this.topCustomers =
                    this.dashboardService.getTopCustomers(restaurantName);
                this.topDishes =
                    this.dashboardService.getTopDishes(restaurantName);
                console.log(this.topDishes);
            });
    }
}
