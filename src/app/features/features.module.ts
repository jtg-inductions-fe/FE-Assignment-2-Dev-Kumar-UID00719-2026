import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [LoginComponent, ErrorComponent, HeaderComponent],
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

        SharedModule,
    ],
    exports: [ErrorComponent, LoginComponent, HeaderComponent],
})
export class FeaturesModule {}
