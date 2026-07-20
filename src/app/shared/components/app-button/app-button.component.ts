import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum ButtonColor {
    Primary = 'primary',
    Accent = 'accent',
    Warn = 'warn',
}

@Component({
    selector: 'app-button',
    templateUrl: './app-button.component.html',
    styleUrls: ['./app-button.component.scss'],
})
export class ButtonComponent {
    @Input()
    variant: 'flat' | 'raised' | 'stroked' | 'icon' = 'raised';

    @Input()
    color: ButtonColor = ButtonColor.Primary;

    @Input()
    type: 'button' | 'submit' | 'reset' = 'button';

    @Input()
    disabled = false;

    @Input()
    buttonClass = '';

    @Input()
    icon = '';

    @Input()
    label = '';

    @Output()
    clicked = new EventEmitter<void>();

    onClick(): void {
        this.clicked.emit();
    }
}
