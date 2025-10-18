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
import { DataBindingAssignment } from '../data-binding-assignment/data-binding-assignment/data-binding-assignment';
import { PipesAssignment } from '../pipes-assignment/pipes-assignment';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { DashboardDataResolver } from '../guards/data-resolve.guard';

export const routes: Routes = [
    // Public routes (no authentication required)
    { path: 'login', component: LoginComponent },
    
    // Protected routes (authentication required)
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        canActivate: [AuthGuard],
        resolve: { dashboardData: DashboardDataResolver }
    },
    
    // Legacy routes (protected with auth guard)
    { 
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
    },
    { 
        path: 'calculator', 
        component: Calculations,
        canActivate: [AuthGuard]
    },
    { 
        path: 'users', 
        loadChildren: () => import('./users/users-module').then(m => m.UsersModule),
        canActivate: [AuthGuard]
    },
    { 
        path: 'lifecycle-hooks', 
        loadChildren: () => import('../lifecycle-hooks/lifecycle-hooks-module').then(m => m.LifecycleHooksModule),
        canActivate: [AuthGuard]
    },
    { 
        path: 'nav-bar', 
        component: NavBar,
        canActivate: [AuthGuard]
    },
    { 
        path: 'live-counter', 
        component: LiveCounter,
        canActivate: [AuthGuard]
    },
    { 
        path: 'light-switch', 
        component: LightSwitch,
        canActivate: [AuthGuard]
    },
    { 
        path: 'event-binding', 
        component: EventBinding,
        canActivate: [AuthGuard]
    },
    { 
        path: 'user-profile', 
        component: UserProfile,
        canActivate: [AuthGuard]
    },    
    { 
        path: 'structural-directives', 
        component: StructuralDirectives,
        canActivate: [AuthGuard]
    },
    { 
        path: 'attribute-directives', 
        component: AttributeDirectives,
        canActivate: [AuthGuard]
    },
    { 
        path: 'built-in-pipes', 
        component: BuiltInPipes,
        canActivate: [AuthGuard]
    }, 
    { 
        path: 'directives-assignment', 
        component: DirectivesAssignment,
        canActivate: [AuthGuard]
    },
    { 
        path: 'data-binding-assignment', 
        component: DataBindingAssignment,
        canActivate: [AuthGuard]
    },
    { 
        path: 'pipes-assignment', 
        component: PipesAssignment,
        canActivate: [AuthGuard]
    },
    { 
        path: 'reactive-form', 
        loadChildren: () => import('../reactive-form/reactive-form-module').then(m => m.ReactiveFormsModule),
        canActivate: [AuthGuard],
        canDeactivate: [CanDeactivateGuard]
    },
    
    // Wildcard route (must be last)
    { path: '**', redirectTo: 'dashboard' }
];
