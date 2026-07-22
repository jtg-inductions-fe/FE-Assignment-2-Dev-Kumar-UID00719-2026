import { Component, Input } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

import { ButtonVariant } from '@shared/components/button/button.constant';
import { InputType } from '@shared/components/form-field/formField.const';
import { HEADER_DATA } from '@constants/layoutHeaderData';
import { HeaderData } from '@constants/layoutHeaderData';
import { ButtonType } from '@shared/components/button/button.constant';
import { RestaurantFormMode } from '@constants/restaurant-form';
import { RestaurantService } from '@services/restaurant.service';
import { RestaurantTableData } from '@models/resturant';
import { RESTAURANT_TABLE_DATA } from '@data/restaurantTableData';

@Component({
    selector: 'app-restaurant-form',
    templateUrl: './restaurant-form.component.html',
    styleUrls: ['./restaurant-form.component.scss'],
})
export class RestaurantFormComponent implements OnInit {
    restaurantForm!: FormGroup;
    buttonType = ButtonType;
    buttonVariant = ButtonVariant;
    header: HeaderData = HEADER_DATA.ADD_RESTAURANTS;
    inputType = InputType;
    mode: RestaurantFormMode = RestaurantFormMode.Add;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private restaurantService: RestaurantService,
    ) {}

    @Input()
    ngOnInit(): void {
        this.restaurantForm = this.initializeFormGroup();
        this.header = history.state.headerData;
        this.mode = history.state.mode;
    }

    private initializeFormGroup(): FormGroup {
        return this.fb.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            owners: this.fb.control<string[]>([]),
        });
    }

    get name(): FormControl {
        return this.restaurantForm.get('name') as FormControl;
    }

    get address(): FormControl {
        return this.restaurantForm.get('address') as FormControl;
    }

    get owners(): FormControl {
        return this.restaurantForm.get('owners') as FormControl;
    }

    onSubmit(): void {
        if (this.restaurantForm.invalid) {
            return;
        }

        const restaurant: RestaurantTableData = {
            id: RESTAURANT_TABLE_DATA.length + 1,
            restaurant: this.name.value,
            address: this.address.value,
            owners: this.owners.value,
        };

        this.restaurantService.addRestaurant(restaurant);
        this.router.navigate(['/restaurants']);
    }
}
