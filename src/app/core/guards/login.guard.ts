import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthenticationService } from '@services/authentication.service';

export const loginGuard: CanActivateFn = (route, state) => {
    const authenticationService = inject(AuthenticationService);
    const router = inject(Router);

    if (authenticationService.isLoggedIn()) {
        return router.createUrlTree(['/dashboard']);
    } else {
        return true;
    }
};
