import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@services/authentication.service';

import { User } from '@models/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    currentUser: User | null = null;
    isLoggedIn = false;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.authenticationService.currentUser$.subscribe((user) => {
            this.currentUser = user;
        });
        this.authenticationService.isLoggedIn$.subscribe((value) => {
            this.isLoggedIn = value;
        });
    }

    logout() {
        this.authenticationService.logout();

        this.router.navigate(['/login']);
    }
}
