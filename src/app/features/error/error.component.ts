import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { PAGE_STATES } from '@constants/page-state';
import { ErrorStateService } from '@services/error-state.service';
@Component({
    selector: 'app-not-found',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
    state = PAGE_STATES.NOT_FOUND;

    private activatedRoute = inject(ActivatedRoute);
    private errorStateService = inject(ErrorStateService);
    private router = inject(Router);

    ngOnInit(): void {
        if (
            this.router.url === '/error' &&
            this.errorStateService.getState() === PAGE_STATES.NOT_FOUND
        ) {
            this.router.navigate(['/dashboard']);
            return;
        }

        this.state =
            this.errorStateService.getState() ??
            this.activatedRoute.snapshot.data['state'];
        this.errorStateService.clearState();
    }
}
