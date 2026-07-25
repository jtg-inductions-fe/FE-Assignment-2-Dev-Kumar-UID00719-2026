import { Component, OnInit, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { DashboardService } from '@services/dashboard.service';

import { RESTAURANT_NAMES } from '@constants/app.const';

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: [],
})
export class AutocompleteComponent implements OnInit {
    myControl = new FormControl<string>('', { nonNullable: true });
    options: string[] = [];
    filteredOptions!: Observable<string[]>;

    constructor(
        private dashboardService: DashboardService,
        private destroyRef: DestroyRef,
    ) {}

    ngOnInit() {
        this.options = [
            RESTAURANT_NAMES.ALL_RESTAURANTS,
            ...this.dashboardService.getRestaurantNames(),
        ];

        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map((value) => this._filter(value || '')),
        );

        this.myControl.valueChanges
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => {
                this.dashboardService.setCurrentRestaurant(value);
            });
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter((option) =>
            option.toLowerCase().includes(filterValue),
        );
    }
}
