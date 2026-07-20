import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '@services/authentication.service';
import { ButtonType } from '@constants/buttonComponent';
import { InputVariant } from '@constants/formFieldComponent';
import { LoginFormFields } from '@constants/formFieldComponent';

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
    inputVariant = InputVariant;

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
            [LoginFormFields.EMAIL]: [
                '',
                [Validators.required, Validators.email],
            ],
            [LoginFormFields.PASSWORD]: ['', Validators.required],
        });
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        if (!this.email || !this.password) return;

        const { email, password } = this.loginForm.value;

        setTimeout(() => {
            const isLoggedIn = this.authenticationService.login(
                email,
                password,
            );
            if (!isLoggedIn) {
                this.loginError = true;
                return;
            }

            this.router.navigate(['/dashboard']);
        }, 1500);
    }

    get email(): FormControl {
        return this.loginForm.get(LoginFormFields.EMAIL) as FormControl;
    }

    get password(): FormControl {
        return this.loginForm.get(LoginFormFields.PASSWORD) as FormControl;
    }
}
