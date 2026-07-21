import {
    Component,
    EventEmitter,
    OnInit,
    DestroyRef,
    Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';

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
    isDesktop = true;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        private destroyRef: DestroyRef,
        private breakPointObserver: BreakpointObserver,
    ) {}

    ngOnInit() {
        this.breakPointObserver
            .observe('(min-width: 1024px)')
            .subscribe((result) => {
                this.isDesktop = result.matches;
            });

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

    @Output() menuButtonClicked = new EventEmitter<void>();

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    onMenuClick() {
        this.menuButtonClicked.emit();
    }
}
