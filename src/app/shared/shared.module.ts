import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { ButtonComponent } from './components/app-button/app-button.component';

@NgModule({
    declarations: [ButtonComponent],
    imports: [CommonModule, MatButtonModule],
    exports: [ButtonComponent],
})
export class SharedModule {}
