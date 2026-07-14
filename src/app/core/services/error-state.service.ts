import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ErrorStateService {
    hasError = signal(false);

    showError(): void {
        this.hasError.set(true);
    }

    clearError(): void {
        this.hasError.set(false);
    }
}
