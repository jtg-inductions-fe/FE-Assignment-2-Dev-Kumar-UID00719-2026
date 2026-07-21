import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { FormControl } from '@angular/forms';

import { DashboardService } from '@services/dashboard.service';

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
    myControl = new FormControl<string>('', { nonNullable: true });
    options: string[] = [];
    filteredOptions!: Observable<string[]>;

    constructor(private dashboardService: DashboardService) {}

    ngOnInit() {
        this.options = [
            'All Restaurants',
            ...this.dashboardService.getRestaurantNames(),
        ];

        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map((value) => this._filter(value || '')),
        );

        this.myControl.valueChanges.subscribe((value) => {
            this.dashboardService.setCurrentRestaurant(value);
            console.log(this.dashboardService.currentRestaurant$);
        });
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter((option) =>
            option.toLowerCase().includes(filterValue),
        );
    }
}
