import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from '@features/error/error.component';
import { LoginComponent } from '@features/authentication/login/login.component';
import { DashboardComponent } from '@features/dashboard/dashboard/dashboard.component';
import { RestaurantsComponent } from '@features/restaurant/restaurants/restaurants.component';
import { RestaurantFormComponent } from '@features/restaurant/restaurant-form/restaurant-form.component';

import { authGuard } from '@guards/auth.guard';
import { roleGuard } from '@guards/role.guard';
import { loginGuard } from '@guards/login.guard';
import { PAGE_STATES } from '@constants/page-state';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
    },
    {
        path: 'restaurants',
        component: RestaurantsComponent,
        canActivate: [authGuard, roleGuard],
    },
    {
        path: 'restaurants/add',
        component: RestaurantFormComponent,
        canActivate: [authGuard, roleGuard],
    },
    {
        path: 'restaurants/edit',
        component: RestaurantFormComponent,
        canActivate: [authGuard, roleGuard],
    },
    {
        path: 'error',
        component: ErrorComponent,
        data: { state: PAGE_STATES.ERROR },
    },
    {
        path: '**',
        component: ErrorComponent,
        canActivate: [authGuard],
        data: { state: PAGE_STATES.NOT_FOUND },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
