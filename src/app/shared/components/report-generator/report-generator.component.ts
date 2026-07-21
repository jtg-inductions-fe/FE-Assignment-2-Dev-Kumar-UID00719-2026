import { Component } from '@angular/core';
import { ButtonVariant } from '../button/button.constant';

@Component({
    selector: 'app-report-generator',
    templateUrl: './report-generator.component.html',
    styleUrls: ['./report-generator.component.scss'],
})
export class ReportGeneratorComponent {
    buttonVariant = ButtonVariant;
}
