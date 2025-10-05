import { Routes } from '@angular/router';
import { NavBar } from '../layout/nav-bar/nav-bar';
import { Calculations } from '../mathFunctions/calculations/calculations';

export const routes: Routes = [
    { path: '', redirectTo: 'calculator', pathMatch: 'full' },
    { path: 'calculator', component: Calculations },
    { path: 'users', 
        loadChildren: () => import('./users/users-module').then(m => m.UsersModule) },
    { path: 'lifecycle-hooks', 
        loadChildren: () => import('../lifecycle-hooks/lifecycle-hooks-module').then(m => m.LifecycleHooksModule) },
    { path: 'nav-bar', component: NavBar },
];
