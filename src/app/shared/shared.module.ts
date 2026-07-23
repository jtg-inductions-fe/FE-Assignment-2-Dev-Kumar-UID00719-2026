import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

import { ButtonComponent } from '@shared/components/button/button.component';
import { FormFieldComponent } from '@shared/components/form-field/form-field.component';
import { ErrorTemplateComponent } from '@shared/components/error-template/error-template.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { SidemenuComponent } from '@shared/components/sidemenu/sidemenu.component';
@NgModule({
    declarations: [
        ButtonComponent,
        FormFieldComponent,
        ErrorTemplateComponent,
        HeaderComponent,
        SidemenuComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatCardModule,
        MatFormFieldModule,
        MatChipsModule,
        MatSelectModule,
        MatTreeModule,
        MatSidenavModule,
        MatDividerModule,
    ],
    exports: [
        ButtonComponent,
        FormFieldComponent,
        ErrorTemplateComponent,
        HeaderComponent,
        SidemenuComponent,
    ],
})
export class SharedModule {}
