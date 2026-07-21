import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { ButtonComponent } from '@shared/components/button/button.component';
import { FormFieldComponent } from '@shared/components/form-field/form-field.component';
import { ErrorTemplateComponent } from '@shared/components/error-template/error-template.component';
import { HeaderComponent } from '@shared/components/header/header.component';

@NgModule({
    declarations: [
        ButtonComponent,
        FormFieldComponent,
        ErrorTemplateComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
    ],
    exports: [
        ButtonComponent,
        FormFieldComponent,
        ErrorTemplateComponent,
        HeaderComponent,
    ],
})
export class SharedModule {}
