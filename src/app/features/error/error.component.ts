import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GlobalErrorHandlerService } from '@services/global-error-handler.service';
import { ROUTE_PATH } from '@constants/app.const';

import { PAGE_STATES } from './error.const';

@Component({
    selector: 'app-not-found',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
    state = PAGE_STATES.NOT_FOUND;

    private activatedRoute = inject(ActivatedRoute);
    private globalErrorHandler = inject(GlobalErrorHandlerService);
    private router = inject(Router);

    ngOnInit(): void {
        const navigationState = history.state.pageState;

        if (
            this.router.url === `/${ROUTE_PATH.ERROR}` &&
            !navigationState &&
            this.globalErrorHandler.getState() === PAGE_STATES.NOT_FOUND
        ) {
            this.router.navigate([`/${ROUTE_PATH.DASHBOARD}`]);
            return;
        }

        this.state =
            navigationState ??
            this.globalErrorHandler.getState() ??
            this.activatedRoute.snapshot.data['state'];

        this.globalErrorHandler.clearState();
    }

    goBackHome() {
        this.router.navigate([`/${ROUTE_PATH.DASHBOARD}`]);
    }
}
