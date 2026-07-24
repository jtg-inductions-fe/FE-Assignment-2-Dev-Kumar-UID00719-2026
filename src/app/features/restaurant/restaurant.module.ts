import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { MatChipsModule } from '@angular/material/chips';

import { SharedModule } from '@shared/shared.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';

@NgModule({
    declarations: [RestaurantsComponent],
    imports: [CommonModule, SharedModule, CdkTableModule, MatChipsModule],
})
export class RestaurantModule {}
