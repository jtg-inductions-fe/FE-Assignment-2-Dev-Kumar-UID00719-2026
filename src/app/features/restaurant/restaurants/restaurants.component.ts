import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';

import { ButtonVariant } from '@shared/components/button/button.constant';
import { RestaurantService } from '@services/restaurant.service';
import { RestaurantTableData } from '@models/resturant';
import { TableColumn } from '@data/table-data';
import { HEADER_DATA } from '@constants/layoutHeaderData';

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

    constructor(private restaurantService: RestaurantService) {}

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
        console.log(restaurant);
    }
}
