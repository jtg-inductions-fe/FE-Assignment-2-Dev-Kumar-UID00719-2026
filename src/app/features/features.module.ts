import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ErrorComponent } from './errorComponent/error.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [ErrorComponent, LoginComponent],
    imports: [CommonModule, SharedModule],
    exports: [ErrorComponent],
})
export class FeaturesModule {}
