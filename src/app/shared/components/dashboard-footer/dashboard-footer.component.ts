import { Component } from '@angular/core';

import { FOOTER_SOCIALS } from '@constants/app.const';

@Component({
    selector: 'app-dashboard-footer',
    templateUrl: './dashboard-footer.component.html',
    styleUrls: ['./dashboard-footer.component.scss'],
})
export class DashboardFooterComponent {
    footerSocials = FOOTER_SOCIALS;
}
