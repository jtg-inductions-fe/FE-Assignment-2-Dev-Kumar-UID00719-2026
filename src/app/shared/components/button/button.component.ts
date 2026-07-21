import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatMenu } from '@angular/material/menu';

import { ButtonVariant, ButtonType } from '@constants/buttonComponent';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() variant: ButtonVariant = ButtonVariant.Raised;
    @Input() type: ButtonType = ButtonType.Button;
    @Input() disabled = false;
    @Input() buttonClass = '';
    @Input() label = '';
    @Input() icon? = '';
    @Input() isSuffix = false;
    @Input() menu: MatMenu | null = null;

    @Output() clicked = new EventEmitter<void>();

    onClick(): void {
        this.clicked.emit();
    }
}
