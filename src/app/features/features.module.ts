import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from '@shared/shared.module';
import { DashboardModule } from '@features/dashboard/dashboard.module';
import { LoginComponent } from '@features/authentication/login/login.component';
import { ErrorComponent } from '@features/error/error.component';
import { MainLayoutComponent } from '@features/layouts/main-layout/main-layout.component';
@NgModule({
    declarations: [LoginComponent, ErrorComponent, MainLayoutComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatSnackBarModule,
        SharedModule,
        DashboardModule,
    ],
    exports: [ErrorComponent, LoginComponent, MainLayoutComponent],
})
export class FeaturesModule {}
