import { Routes } from '@angular/router';
import { NavBar } from '../layout/nav-bar/nav-bar';
import { Calculations } from '../mathFunctions/calculations/calculations';
import { LiveCounter } from '../counter/live-counter/live-counter';
import { LightSwitch } from '../light-switch/light-switch';
import { EventBinding } from '../event-binding/event-binding';
import { UserProfile } from '../user-profile/user-profile';
import { StructuralDirectives } from '../structural-directives/structural-directives';
import { AttributeDirectives } from '../attribute-directives/attribute-directives';
import { BuiltInPipes } from '../built-in-pipes/built-in-pipes';
import { DirectivesAssignment } from '../directives-assignment/directives-assignment';

export const routes: Routes = [
    { path: '', redirectTo: 'calculator', pathMatch: 'full' },
    { path: 'calculator', component: Calculations },
    { path: 'users', 
        loadChildren: () => import('./users/users-module').then(m => m.UsersModule) },
    { path: 'lifecycle-hooks', 
        loadChildren: () => import('../lifecycle-hooks/lifecycle-hooks-module').then(m => m.LifecycleHooksModule) },
    { path: 'nav-bar', component: NavBar },
    { path: 'live-counter', component: LiveCounter},
    { path: 'light-switch', component: LightSwitch},
    { path: 'event-binding', component: EventBinding},
    { path: 'user-profile', component: UserProfile},    
    { path: 'structural-directives', component: StructuralDirectives},
    { path: 'attribute-directives', component: AttributeDirectives},
    { path: 'built-in-pipes', component: BuiltInPipes}, 
    { path: 'directives-assignment', component: DirectivesAssignment}
];
