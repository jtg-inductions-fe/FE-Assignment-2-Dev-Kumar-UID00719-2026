import { ErrorHandler, Injectable, inject } from '@angular/core';

import { ErrorStateService } from './error-state.service';

@Injectable({
    providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
    private errorStateService = inject(ErrorStateService);

    handleError(error: unknown): void {
        let message = 'Unknown Message';
        if (error instanceof Error) {
            message = error.message ? error.message : error.toString();
        }
        console.error(message);
        this.errorStateService.showError();
    }
}
