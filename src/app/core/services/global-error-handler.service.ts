import { ErrorHandler, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { PAGE_STATES, PageState } from '@features/error/error.const';
import { ROUTE_PATH } from '@constants/app.const';

@Injectable({
    providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
    private router = inject(Router);
    private state: PageState = PAGE_STATES.NOT_FOUND;

    handleError(error: unknown): void {
        console.error(error);
        this.setState(PAGE_STATES.ERROR);
        this.router.navigate([`/${ROUTE_PATH.ERROR}`]);
    }

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
