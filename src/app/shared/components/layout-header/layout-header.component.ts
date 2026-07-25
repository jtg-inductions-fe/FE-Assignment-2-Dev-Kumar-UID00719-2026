import { Component, Input } from '@angular/core';

import { HeaderData } from './layout-header.const';

@Component({
    selector: 'app-layout-header',
    templateUrl: './layout-header.component.html',
    styleUrls: ['./layout-header.component.scss'],
})
export class LayoutHeaderComponent {
    isRestaurant = false;
    @Input() data!: HeaderData;
}
