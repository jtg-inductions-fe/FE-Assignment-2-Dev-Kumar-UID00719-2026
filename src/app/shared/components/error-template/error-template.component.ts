import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-error-template',
    templateUrl: './error-template.component.html',
    styleUrls: ['./error-template.component.scss'],
})
export class ErrorTemplateComponent {
    @Input({ required: true }) control!: FormControl;
    @Input() label = '';
}
