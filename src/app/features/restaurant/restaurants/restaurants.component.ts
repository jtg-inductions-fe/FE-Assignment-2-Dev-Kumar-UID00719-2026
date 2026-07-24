import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonVariant } from '@shared/components/button/button.constant';
import { RestaurantService } from '@services/restaurant.service';
import { RestaurantTableData } from '@models/resturant';
import { TableColumn } from '@data/table-data';
import { HEADER_DATA } from '@constants/layoutHeaderData';
import { RestaurantFormMode } from '@constants/restaurant-form';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
    headerData = HEADER_DATA;
    buttonVariant = ButtonVariant;

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

        this.columns = [
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
        // const id = restaurant.id;
        this.router.navigate([`/restaurants/edit`], {
            state: {
                mode: RestaurantFormMode.Edit,
                headerData: HEADER_DATA.EDIT_RESTAURANTS,
                restaurant: restaurant,
            },
        });
        console.log(restaurant);
    }

    navigateToAddRestaurant() {
        this.router.navigate(['/restaurants/add'], {
            state: {
                mode: RestaurantFormMode.Add,
                headerData: HEADER_DATA.ADD_RESTAURANTS,
            },
        });
    }
}
