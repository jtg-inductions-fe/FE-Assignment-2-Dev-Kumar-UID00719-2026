import { ErrorHandler, Injectable, inject } from '@angular/core';

import { ErrorStateService } from './error-state.service';

@Injectable({
    providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
    private errorStateService = inject(ErrorStateService);

    handleError(error: unknown): void {
        this.errorStateService.showError();
    }
}
