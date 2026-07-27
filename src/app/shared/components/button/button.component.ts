import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatMenu } from '@angular/material/menu';

import {
    ButtonVariant,
    ButtonType,
} from '@shared/components/button/button.constant';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    buttonVariant = ButtonVariant;

    @Input() variant: ButtonVariant = ButtonVariant.Raised;
    @Input() type: ButtonType = ButtonType.Button;
    @Input() disabled = false;
    @Input() buttonClass = '';
    @Input() label = '';
    @Input() icon? = '';
    @Input() isSuffix = false;
    @Input() menu: MatMenu | null = null;
    @Input() loading = false;

    @Output() clicked = new EventEmitter<void>();

    onClick(): void {
        this.clicked.emit();
    }
}
