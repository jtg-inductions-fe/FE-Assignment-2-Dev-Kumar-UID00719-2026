import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from '@features/error/error.component';
import { LoginComponent } from '@features/authentication/login/login.component';
import { DashboardComponent } from '@features/dashboard/dashboard/dashboard.component';

import { authGuard } from '@guards/auth.guard';
import { loginGuard } from '@guards/login.guard';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
    },
    { path: '**', component: ErrorComponent, canActivate: [authGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
