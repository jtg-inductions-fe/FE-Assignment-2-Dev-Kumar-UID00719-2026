import {
    Component,
    OnInit,
    Signal,
    ViewChild,
    computed,
    DestroyRef,
    signal,
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NestedTreeControl } from '@angular/cdk/tree';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MatDrawer } from '@angular/material/sidenav';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { AuthenticationService } from '@services/authentication.service';
import { SidenavItem } from '@models/sidebar-item';
import { SidenavItemType } from '@models/sidebar-item';
import { SidebarMode } from './sidemenu.const';
import SidenavData from '@data/sidenav.data.json';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
    isDesktop = signal(true);
    isLoggedIn = signal(false);
    sidebarMode = SidebarMode;
    isExpanded: Signal<boolean> = computed(
        () => this.isDesktop() && this.isLoggedIn(),
    );

    treeControl = new NestedTreeControl<SidenavItem>((node) => node.children);
    dataSource = new MatTreeNestedDataSource<SidenavItem>();
    private sidenavItems: SidenavItem[] =
        SidenavData.SidenavItems as SidenavItem[];

    constructor(
        private breakpointObserver: BreakpointObserver,
        private destroyRef: DestroyRef,
        private authenticationService: AuthenticationService,
    ) {}

    ngOnInit(): void {
        this.authenticationService.currentUser$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((currentUser) => {
                if (!currentUser) {
                    this.dataSource.data = [];
                    return;
                }

                this.dataSource.data = this.sidenavItems.filter((item) =>
                    item.roles.includes(currentUser.role),
                );
            });

        this.breakpointObserver
            .observe('(min-width: 1024px)')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((result) => {
                this.isDesktop.set(result.matches);
            });

        this.authenticationService.isLoggedIn$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => {
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
