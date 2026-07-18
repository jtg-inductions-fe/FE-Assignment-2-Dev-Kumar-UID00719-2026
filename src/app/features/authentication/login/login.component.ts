import { Component,} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthenticationService } from '@services/authentication.service';
import { ButtonType } from '@constants/buttonComponent';
import { InputType } from '@shared/components/form-field/formField.const';
import { NotificationService } from '@services/notification.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm!: FormGroup;
    loginError = false;
    hide = true;
    buttonType = ButtonType;
    InputType = InputType;

    constructor(
        private fb: FormBuilder,
        private authenticationService: AuthenticationService,
        private router: Router,
        private _snackBar: MatSnackBar,
        private notificationService: NotificationService,
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

        const { email, password } = this.loginForm.value;

        const isLoggedIn = this.authenticationService.login(email, password);
        if (!isLoggedIn) {
            this.notificationService.showErrorSnackBar(
                'Invalid credentials',
                'cancel',
            );
            return;
        }

        this.loginError = false;
        this.router.navigate(['/dashboard']);
        this.notificationService.showErrorSnackBar('Login success!', 'cancel');
    }
}
