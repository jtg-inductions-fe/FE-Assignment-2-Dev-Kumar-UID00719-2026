import { Component, Input } from '@angular/core';

import { ButtonVariant, ButtonType } from '@constants/button-component';

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
}
