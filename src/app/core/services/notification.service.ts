import { Injectable } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    private snackBarConfig: MatSnackBarConfig = {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
    };

    constructor(private snackBar: MatSnackBar) {}

    showErrorSnackBar(message: string, action: string): void {
        this.openSnackBar(message, action, 'error-snackbar');
    }

    showSuccessSnackBar(message: string, action: string): void {
        this.openSnackBar(message, action, 'success-snackbar');
    }

    private openSnackBar(
        message: string,
        action: string,
        panelClass: string,
    ): void {
        this.snackBar.open(message, action, {
            ...this.snackBarConfig,
            panelClass: [panelClass],
        });
    }
}
