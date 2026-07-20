import { Component, OnInit } from '@angular/core';
import { CardListData } from '@models/stats-card-data';
import { DashboardService } from '@services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    topCustomers!: CardListData;

    constructor(private dashboardService: DashboardService) {}

    ngOnInit(): void {
        this.dashboardService.currentRestaurant$.subscribe((restaurantName) => {
            this.topCustomers =
                this.dashboardService.getTopCustomers(restaurantName);
        });
    }
}
