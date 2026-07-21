import { Component, OnInit, DestroyRef } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AuthenticationService } from '@services/authentication.service';
import { AuthenticatedUser } from '@models/user';
import { ButtonVariant } from '@constants/buttonComponent';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    currentUser: AuthenticatedUser | null = null;
    isLoggedIn = false;
    buttonVariant = ButtonVariant;

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
                console.log('isLoggedIn', this.isLoggedIn);
            });
    }

    logout() {
        this.authenticationService.logout();

        this.router.navigate(['/login']);
    }
}
