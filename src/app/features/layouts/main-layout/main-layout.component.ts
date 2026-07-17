import { Component, ViewChild } from '@angular/core';
import { SidemenuComponent } from '@shared/components/sidemenu/sidemenu.component';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
    @ViewChild(SidemenuComponent)
    sideMenu!: SidemenuComponent;

    toggleSideMenu() {
        this.sideMenu.toggle();
    }
}
