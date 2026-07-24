import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AuthenticationService } from '@services/authentication.service';
import { NotificationService } from '@services/notification.service';

import { ButtonType } from '@shared/components/button/button.constant';
import { InputType } from '@shared/components/form-field/formField.const';

import { LoginFormFields } from './login.const';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    hide = true;
    buttonType = ButtonType;
    InputType = InputType;

    constructor(
        private fb: FormBuilder,
        private authenticationService: AuthenticationService,
        private router: Router,
        private notificationService: NotificationService,
        private destroyRef: DestroyRef,
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
            this.authenticationService
                .login(email, password)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe({
                    next: () => {
                        this.router.navigate(['/dashboard']);
                        this.notificationService.showSuccessSnackBar(
                            'Login success!',
                            '',
                        );
                    },
                    error: () => {
                        this.notificationService.showErrorSnackBar(
                            'Invalid credentials',
                            'cancel',
                        );
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
