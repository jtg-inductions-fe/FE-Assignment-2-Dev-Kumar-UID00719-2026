import { Component, OnInit } from '@angular/core';
import { DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { DashboardService } from '@services/dashboard.service';
import { STATS } from './stats-container.const';

@Component({
    selector: 'app-stats-container',
    templateUrl: './stats-container.component.html',
    styleUrls: ['./stats-container.component.scss'],
})
export class StatsContainerComponent implements OnInit {
    stats = STATS;

    constructor(
        private dashboardService: DashboardService,
        private destroyRef: DestroyRef,
    ) {}

    ngOnInit(): void {
        this.dashboardService.currentRestaurant$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((restaurantName) => {
                const dashboardStats =
                    this.dashboardService.getDashboardStats(restaurantName);

                this.stats.forEach((stat) => {
                    switch (stat.key) {
                        case 'revenue':
                            stat.value = dashboardStats.totalRevenue;
                            break;

                        case 'orders':
                            stat.value = dashboardStats.totalOrders;
                            break;

                        case 'completed':
                            stat.value = dashboardStats.completedOrders;
                            break;

                        case 'active':
                            stat.value = dashboardStats.activeOrders;
                            break;
                    }
                });
            });
    }
}
