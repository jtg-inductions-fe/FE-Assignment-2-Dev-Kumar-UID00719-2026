import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@services/dashboard.service';

@Component({
    selector: 'app-stats-container',
    templateUrl: './stats-container.component.html',
    styleUrls: ['./stats-container.component.scss'],
})
export class StatsContainerComponent implements OnInit {
    stats = [
        {
            key: 'revenue',
            title: 'Total Revenue',
            icon: 'attach_money',
            colorClass: 'stats-card__icon--green',
            value: 0,
        },
        {
            key: 'orders',
            title: 'Total Orders',
            icon: 'shopping_cart',
            colorClass: 'stats-card__icon--blue',
            value: 0,
        },
        {
            key: 'completed',
            title: 'Completed Orders',
            icon: 'check_circle',
            colorClass: 'stats-card__icon--orange',
            value: 0,
        },
        {
            key: 'active',
            title: 'Active Orders',
            icon: 'restaurant',
            colorClass: 'stats-card__icon--green',
            value: 0,
        },
    ];

    constructor(private dashboardService: DashboardService) {}

    ngOnInit(): void {
        this.dashboardService.currentRestaurant$.subscribe((restaurantName) => {
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
