import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';

@NgModule({
    declarations: [RestaurantsComponent, RestaurantFormComponent],
    imports: [
        CommonModule,
        SharedModule,
        CdkTableModule,
        MatChipsModule,
        MatCardModule,
        ReactiveFormsModule,
    ],
})
export class RestaurantModule {}
