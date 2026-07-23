import { Component, OnInit, DestroyRef } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AuthenticationService } from '@services/authentication.service';
import { AuthenticatedUser } from '@models/user';
import { ButtonVariant } from '@shared/components/button/button.constant';
import { APP_LOGO } from '@constants/app.const';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    currentUser: AuthenticatedUser | null = null;
    isLoggedIn = false;
    buttonVariant = ButtonVariant;
    appLogo = APP_LOGO;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        private destroyRef: DestroyRef,
    ) {}

    ngOnInit() {
        this.authenticationService.currentUser$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((user) => {
                this.currentUser = user;
            });
        this.authenticationService.isLoggedIn$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => {
                this.isLoggedIn = value;
            });
    }

    logout() {
        this.authenticationService.logout();

        this.router.navigate(['/login']);
    }
}
