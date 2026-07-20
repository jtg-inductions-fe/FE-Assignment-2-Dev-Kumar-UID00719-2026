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
import { NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { StatsContainerComponent } from './components/stats-container/stats-container.component';
import { ReportGeneratorComponent } from './components/report-generator/report-generator.component';
import { DataListCardComponent } from './components/data-list-card/data-list-card.component';
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
        LayoutHeaderComponent,
        AutocompleteComponent,
        StatsContainerComponent,
        ReportGeneratorComponent,
        DataListCardComponent,
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
        MatListModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        NgIf,
    ],
    exports: [
        ButtonComponent,
        FormFieldComponent,
        ErrorTemplateComponent,
        HeaderComponent,
        SidemenuComponent,
        AutocompleteComponent,
        LayoutHeaderComponent,
        StatsContainerComponent,
        ReportGeneratorComponent,
        DataListCardComponent,
    ],
})
export class SharedModule {}
