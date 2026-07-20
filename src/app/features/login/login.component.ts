import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '@services/authentication.service';
import { ButtonType } from '@constants/buttonComponent';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm: FormGroup;
    loginError = false;
    hide = true;
    buttonType = ButtonType;

    constructor(
        private fb: FormBuilder,
        private authenticationService: AuthenticationService,
        private router: Router,
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        if (!this.email || !this.password) return;

        const { email, password } = this.loginForm.value;

        const isLoggedIn = this.authenticationService.login(email, password);
        if (!isLoggedIn) {
            this.loginError = true;
            return;
        }

        this.loginError = false;
        this.router.navigate(['/dasboard']);
    }

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }
}
