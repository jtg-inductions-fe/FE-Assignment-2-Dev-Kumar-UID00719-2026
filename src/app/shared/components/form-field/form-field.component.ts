import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import {
    ButtonVariant,
    ButtonType,
} from '@shared/components/button/button.constant';
import { InputType, FormFieldAppearance } from './formField.const';

@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
    @Input({ required: true }) control!: FormControl;
    @Input() label = '';
    @Input() placeholder = '';
    @Input() variant: InputType = InputType.Email;
    @Input() appearance: FormFieldAppearance = FormFieldAppearance.Outline;

    hide = true;
    readonly FormFieldAppearance = FormFieldAppearance;
    readonly ButtonVariant = ButtonVariant;
    readonly ButtonType = ButtonType;
    readonly InputType = InputType;

    get inputType(): string {
        if (this.variant === InputType.Password) {
            return this.hide ? 'password' : 'text';
        }

        return 'email';
    }

    togglePassword(): void {
        this.hide = !this.hide;
    }
}
