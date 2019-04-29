import { Routes, RouterModule } from '@angular/router';

import { MainForm } from './app-main-form/app-main-form';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthDevices } from './authorized-devices/authorized-devices';


const appRoutes: Routes = [
    {
        path: '',
        component: MainForm,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'auth-devices',
        component: AuthDevices
    },

    { path: '**', redirectTo: '' }
];

export const CustomRouterModule = RouterModule.forRoot(appRoutes);