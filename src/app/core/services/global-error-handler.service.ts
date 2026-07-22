import { ErrorHandler, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ErrorStateService } from './error-state.service';
import { PAGE_STATES } from '@constants/page-state';

@Injectable({
    providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
    private errorStateService = inject(ErrorStateService);
    private router = inject(Router);

    handleError(error: unknown): void {
        console.error(error);
        this.errorStateService.setState(PAGE_STATES.ERROR);
        this.router.navigate(['/error']);
    }
}
