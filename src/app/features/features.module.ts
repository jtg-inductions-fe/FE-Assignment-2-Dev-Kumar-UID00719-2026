import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from '@shared/shared.module';
import { DashboardModule } from '@features/dashboard/dashboard.module';
import { ErrorComponent } from '@features/error/error.component';
import { RestaurantModule } from './restaurant/restaurant.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { LayoutsModule } from './layouts/layouts.module';
@NgModule({
    declarations: [ErrorComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatSnackBarModule,
        SharedModule,
        DashboardModule,
        RestaurantModule,
        AuthenticationModule,
        LayoutsModule,
    ],
    exports: [ErrorComponent, RestaurantModule, AuthenticationModule],
})
export class FeaturesModule {}
