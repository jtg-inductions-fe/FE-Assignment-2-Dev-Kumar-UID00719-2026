import { Component, DestroyRef, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AuthenticationService } from '@services/authentication.service';
import { NotificationService } from '@services/notification.service';

import { ButtonType } from '@shared/components/button/button.constant';
import { InputType } from '@shared/components/form-field/formField.const';
import { ROUTE_PATH } from '@constants/app.const';

import { LoginFormFields } from './login.const';
import { LOGIN_MESSAGE } from './login.const';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    hide = true;
    ButtonType = ButtonType;
    InputType = InputType;
    loading = false;

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
                {
                    validators: [Validators.required, Validators.email],
                    updateOn: 'blur',
                },
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
        this.loading = true;

        setTimeout(() => {
            this.authenticationService
                .login(email, password)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe({
                    next: () => {
                        this.loading = false;
                        this.router.navigate([`/${ROUTE_PATH.DASHBOARD}`]);
                        this.notificationService.showSuccessSnackBar(
                            LOGIN_MESSAGE.SUCCESS,
                            '',
                        );
                    },
                    error: () => {
                        this.loading = false;
                        this.notificationService.showErrorSnackBar(
                            LOGIN_MESSAGE.FAILED,
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
