import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '@shared/components/button/button.component';
import { FormFieldComponent } from '@shared/components/form-field/form-field.component';
import { ErrorTemplateComponent } from '@shared/components/error-template/error-template.component';

@NgModule({
    declarations: [ButtonComponent, FormFieldComponent, ErrorTemplateComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
    exports: [ButtonComponent, FormFieldComponent, ErrorTemplateComponent],
})
export class SharedModule {}
