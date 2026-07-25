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
import { PAGE_STATES } from '@features/error/error.const';
import { ROUTE_PATH } from '@constants/app.const';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: ROUTE_PATH.LOGIN,
        component: LoginComponent,
        canActivate: [loginGuard],
    },
    {
        path: ROUTE_PATH.DASHBOARD,
        component: DashboardComponent,
        canActivate: [authGuard],
    },
    {
        path: ROUTE_PATH.RESTAURANTS,
        component: RestaurantsComponent,
        canActivate: [authGuard, roleGuard],
    },
    {
        path: ROUTE_PATH.ADD_RESTAURANTS,
        component: RestaurantFormComponent,
        canActivate: [authGuard, roleGuard],
    },
    {
        path: ROUTE_PATH.EDIT_RESTAURANTS,
        component: RestaurantFormComponent,
        canActivate: [authGuard, roleGuard],
    },
    {
        path: ROUTE_PATH.ERROR,
        component: ErrorComponent,
        data: { state: PAGE_STATES.ERROR },
    },
    {
        path: ROUTE_PATH.UNKNOWN,
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
