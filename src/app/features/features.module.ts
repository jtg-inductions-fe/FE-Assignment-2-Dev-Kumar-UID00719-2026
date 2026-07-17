import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './errorComponent/error.component';

@NgModule({
    declarations: [LoginComponent, ErrorComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,

        SharedModule,
    ],
})
export class FeaturesModule {}
