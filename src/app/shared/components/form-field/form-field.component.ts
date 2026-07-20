import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ButtonVariant } from '@constants/buttonComponent';
import { ButtonType } from '@constants/buttonComponent';
import { InputVariant } from '@constants/formFieldComponent';
import { FormFieldAppearance } from '@constants/formFieldComponent';

@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
    @Input({ required: true }) control!: FormControl;
    @Input() label = '';
    @Input() placeholder = '';
    @Input() variant: InputVariant = InputVariant.email;
    @Input() appearance: FormFieldAppearance = FormFieldAppearance.outline;

    hide = true;
    FormFieldAppearance = FormFieldAppearance;
    ButtonVariant = ButtonVariant;
    ButtonType = ButtonType;
    InputVariant = InputVariant;

    get inputType(): string {
        if (this.variant === InputVariant.password) {
            return this.hide ? 'password' : 'text';
        }

        return 'email';
    }

    togglePassword(): void {
        this.hide = !this.hide;
    }
}
