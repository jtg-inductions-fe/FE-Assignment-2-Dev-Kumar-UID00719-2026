import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@services/authentication.service';

export const roleGuard: CanActivateFn = () => {
    const authenticationService = inject(AuthenticationService);
    const router = inject(Router);

    if (authenticationService.getRole()) {
        return true;
    } else {
        return router.createUrlTree(['/dashboard']);
    }
};
