import { Injectable } from '@angular/core';

import { PAGE_STATES } from '@constants/page-state';
import { PageState } from '@constants/page-state';
@Injectable({
    providedIn: 'root',
})
export class ErrorStateService {
    private state: PageState = PAGE_STATES.NOT_FOUND;

    setState(state: PageState): void {
        this.state = state;
    }

    getState(): PageState {
        return this.state;
    }

    clearState(): void {
        this.state = PAGE_STATES.NOT_FOUND;
    }
}
