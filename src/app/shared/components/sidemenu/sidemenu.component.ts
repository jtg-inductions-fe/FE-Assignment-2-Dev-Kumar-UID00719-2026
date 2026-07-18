import {
    Component,
    OnInit,
    Signal,
    ViewChild,
    computed,
    signal,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { SidenavItem } from '@models/sidebar-item';
import { SIDENAV_ITEMS } from '@data/sidebar-item.data';
import { SidenavItemType } from '@models/sidebar-item';
import { AuthenticationService } from '@services/authentication.service';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
    isDesktop = signal(true);
    isLoggedIn = signal(false);
    isExpanded: Signal<boolean> = computed(
        () => this.isDesktop() && this.isLoggedIn(),
    );

    treeControl = new NestedTreeControl<SidenavItem>((node) => node.children);
    dataSource = new MatTreeNestedDataSource<SidenavItem>();

    constructor(
        private breakpointObserver: BreakpointObserver,
        private authenticationService: AuthenticationService,
    ) {}

    ngOnInit(): void {
        this.authenticationService.currentUser$.subscribe((currentUser) => {
            if (!currentUser) {
                this.dataSource.data = [];
                return;
            }

            this.dataSource.data = SIDENAV_ITEMS.filter((item) =>
                item.roles.includes(currentUser!.role),
            );
        });

        this.breakpointObserver
            .observe('(min-width: 1024px)')
            .subscribe((result) => {
                this.isDesktop.set(result.matches);
            });

        this.authenticationService.isLoggedIn$.subscribe((value) => {
            console.log('auth value', value);
            this.isLoggedIn.set(value);
        });
    }

    @ViewChild('drawer')
    drawer!: MatDrawer;

    toggle(): void {
        this.drawer.toggle();
    }

    hasChild = (_: number, node: SidenavItem): boolean =>
        !!node.children?.length;

    isLink = (_: number, node: SidenavItem): boolean =>
        node.type === SidenavItemType.Link;

    isDivider = (_: number, node: SidenavItem): boolean =>
        node.type === SidenavItemType.Divider;
}
