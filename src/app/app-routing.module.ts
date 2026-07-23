import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from '@features/error/error.component';
import { LoginComponent } from '@features/login/login.component';

import { authGuard } from '@guards/auth.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: ErrorComponent, canActivate: [authGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
