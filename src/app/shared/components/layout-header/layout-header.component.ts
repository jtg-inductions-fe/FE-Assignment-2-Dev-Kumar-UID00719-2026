import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@services/authentication.service';
import { Role } from '@models/user';

@Component({
    selector: 'app-layout-header',
    templateUrl: './layout-header.component.html',
    styleUrls: ['./layout-header.component.scss'],
})
export class LayoutHeaderComponent implements OnInit {
    isAdmin = false;

    constructor(private authenticationService: AuthenticationService) {}

    ngOnInit(): void {
        const user = this.authenticationService.getCurrentUser();
        this.isAdmin = user?.role === Role.Admin;
    }
}
