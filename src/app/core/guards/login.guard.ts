import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthenticationService } from '@services/authentication.service';

import { ROUTE_PATH } from '@constants/app.const';

export const loginGuard: CanActivateFn = () => {
    const authenticationService = inject(AuthenticationService);
    const router = inject(Router);

    if (authenticationService.isLoggedIn()) {
        return router.createUrlTree([`/${ROUTE_PATH.DASHBOARD}`]);
    }

    return true;
};
