import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ButtonComponent } from '@shared/components/button/button.component';

@NgModule({
    declarations: [ButtonComponent,],
    imports: [CommonModule, MatButtonModule, MatIconModule],
    exports: [ButtonComponent,],
})
export class SharedModule {}
