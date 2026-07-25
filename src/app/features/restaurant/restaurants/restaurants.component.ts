import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { RestaurantService } from '@services/restaurant.service';
import { RestaurantTableData } from '@models/resturant';
import { TableColumn } from '@models/table-data';
import { HEADER_DATA } from '@shared/components/layout-header/layout-header.const';
import { ButtonVariant } from '@shared/components/button/button.constant';
import { RestaurantFormMode } from '@constants/restaurant-form';
import { ROUTE_PATH } from '@constants/app.const';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
    headerData = HEADER_DATA;
    ButtonVariant = ButtonVariant;

    restaurantData: RestaurantTableData[] = [];
    columns: TableColumn[] = [];

    @ViewChild('ownerTemplate', { static: true })
    ownerTemplate!: TemplateRef<unknown>;
    @ViewChild('actionTemplate', { static: true })
    actionTemplate!: TemplateRef<unknown>;

    constructor(
        private restaurantService: RestaurantService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.restaurantData = this.restaurantService.getRestaurants();
        this.columns = this.getColumns();
    }

    getColumns(): TableColumn[] {
        return [
            {
                key: 'restaurant',
                label: 'RESTAURANT NAME',
                columnClass: 'mat-body-1',
            },
            {
                key: 'address',
                label: 'ADDRESS',
                columnClass: 'mat-subtitle-2',
            },
            {
                key: 'owners',
                label: 'OWNERS',
                template: this.ownerTemplate,
            },
            {
                key: 'actions',
                label: 'ACTIONS',
                template: this.actionTemplate,
            },
        ];
    }

    editRestaurant(restaurant: RestaurantTableData): void {
        this.router.navigate([`/${ROUTE_PATH.EDIT_RESTAURANTS}`], {
            state: {
                mode: RestaurantFormMode.Edit,
                headerData: HEADER_DATA.EDIT_RESTAURANTS,
                restaurant: restaurant,
            },
        });
    }

    navigateToAddRestaurant() {
        this.router.navigate([`/${ROUTE_PATH.ADD_RESTAURANTS}`], {
            state: {
                mode: RestaurantFormMode.Add,
                headerData: HEADER_DATA.ADD_RESTAURANTS,
            },
        });
    }
}
