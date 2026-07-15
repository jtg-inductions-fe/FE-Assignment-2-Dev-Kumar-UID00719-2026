import { Component } from '@angular/core';

import { PAGE_STATES } from '@constants/page-state';

@Component({
    selector: 'app-not-found',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
    state = PAGE_STATES.NOT_FOUND;
}
