import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '@services/authentication.service';
import { InputType } from '@shared/components/form-field/formField.const';
import { ButtonType } from '@constants/buttonComponent';

import { LoginFormFields } from './login.const';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    loginError = false;
    hide = true;
    buttonType = ButtonType;
    InputType = InputType;

    constructor(
        private fb: FormBuilder,
        private authenticationService: AuthenticationService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.loginForm = this.initializeFormGroup();
    }

    private initializeFormGroup(): FormGroup {
        return this.fb.group({
            [LoginFormFields.Email]: [
                '',
                [Validators.required, Validators.email],
            ],
            [LoginFormFields.Password]: ['', Validators.required],
        });
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        const { email, password } = this.loginForm.value;

        setTimeout(() => {
            this.authenticationService.login(email, password).subscribe({
                next: () => {
                    this.loginError = false;
                    this.router.navigate(['/dashboard']);
                },
                error: () => {
                    this.loginError = true;
                },
            });
        }, 1500);
    }

    get email(): FormControl {
        return this.loginForm.get(LoginFormFields.Email) as FormControl;
    }

    get password(): FormControl {
        return this.loginForm.get(LoginFormFields.Password) as FormControl;
    }
}
