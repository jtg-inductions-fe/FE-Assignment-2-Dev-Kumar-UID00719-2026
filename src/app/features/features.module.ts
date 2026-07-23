import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ErrorComponent } from '@features/errorComponent/error.component';

@NgModule({
    declarations: [ErrorComponent],
    imports: [CommonModule, SharedModule],
    exports: [ErrorComponent],
})
export class FeaturesModule {}
