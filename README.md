#  Angular Installation & Introduction - 📅 03-Oct-2025

<h2> 1️⃣ Angular Installation </h2>

✅ Check Node & npm versions:

    node -v  
    npm -v

✅ Install Angular CLI globally:

    npm install -g @angular/cli


✅ Check Angular version:

    ng version

✅ Create a new Angular project:

    ng new {project_name}

✅ Navigate into project folder:

    cd {project_name}

✅ Install dependencies:

    npm install

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.

# Development server

To start a local development server, run:

```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

# Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

# Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

# Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

# Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

# Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

<h2> 2️⃣ New Project & Component Creation </h2>

Create a new folder inside src/

Open terminal in that folder

Generate a new component:

    ng g c users-list

<h2> 3️⃣ Selectors </h2>

Selectors help use components inside other components.

Example:

    <app-users-list></app-users-list>

<h2> 4️⃣ ngModel </h2>

Enables two-way data binding between HTML and component class.

Example:

    <input [(ngModel)]="username" placeholder="Enter name">
    <p>Welcome, {{ username }}!</p>

<h2> 5️⃣ Interpolation </h2>

Used to display dynamic values in templates.

Example:

    <h2>{{ title }}</h2>

<h2> 6️⃣ Subcomponent Declarations with Selectors </h2>

You can nest components using their selectors inside parent templates.

Example:

    <app-header></app-header>
    <app-users-list></app-users-list>
    <app-footer></app-footer>

✨ This covers today’s practice: Installation → New Project → Components → Data Binding → Selectors.


<br>

# 📘 Today's Angular Class – Phase 1 & Phase 2

<h2>🗓️ Date: 04-Oct-2025 </h2>

<h2> 🚀 Phase 1: Property Binding, Event Binding & Directives </h2> 

<h3> 🔹 1. Property Binding </h3>

Bind component properties to HTML attributes using [ ].

    <img [src]="userImage" [alt]="userName">
    <input [value]="userEmail">

<h3> 🔹 2. Event Binding </h3>

Capture user actions/events using ( ).

    <button (click)="onLogin()">Login</button>
    <input (input)="onInputChange($event)">

<h3> 🔹 3. Structural Directives </h3>

✔ *ngIf → Conditional rendering

    <p *ngIf="isLoggedIn">Welcome, {{ userName }}!</p>

✔ *ngFor → Looping

    <ul>
       <li *ngFor="let item of items">{{ item }}</li>
    </ul>

✔ *ngSwitch → Conditional content

     <div [ngSwitch]="role">
     <p *ngSwitchCase="'admin'">Admin Panel</p>
     <p *ngSwitchCase="'user'">User Dashboard</p>
     <p *ngSwitchDefault>Guest Access</p>
    </div>

<h3> 🔹 4. Attribute Directives </h3>

✔ ngClass → Dynamic classes

    <p [ngClass]="{ 'active': isActive, 'inactive': !isActive }">Status</p>

✔ ngStyle → Inline styles dynamically

    <p [ngStyle]="{ 'color': isActive ? 'green' : 'red' }">
       {{ isActive ? 'Active' : 'Inactive' }}
    </p>

<h2> 🚀 Phase 2: Building Blocks – Pipes </h2>

<h3> 🔹 Built-in Pipes </h3>

Angular pipes help transform data in templates.

✔ UpperCasePipe

    <p>{{ userName | uppercase }}</p>

✔ LowerCasePipe

    <p>{{ userName | lowercase }}</p>

✔ DatePipe

    <p>{{ today | date:'fullDate' }}</p>

✔ CurrencyPipe

    <p>{{ price | currency:'USD':'symbol' }}</p>

✔ DecimalPipe

    <p>{{ value | number:'1.2-2' }}</p>

✔ PercentPipe

    <p>{{ score | percent }}</p>

✔ SlicePipe

    <ul>
       <li *ngFor="let item of items | slice:1:3">{{ item }}</li>
    </ul>

<h2> 🔹 Services & Dependency Injection </h2>

<h3> 🔹 1. Creating Services </h3>

Services are used to share data and logic across multiple components.

Created using Angular CLI:

    ng generate service user

Example service:

     import { Injectable } from '@angular/core';

     @Injectable({
     providedIn: 'root'   // makes it available app-wide
     })
     export class UserService {
      private users = ['Sony', 'Rahul', 'Aditi'];

      getUsers() {
    return this.users;
      }
     }

<h3> 🔹 2. @Injectable Decorator </h3>

Marks a class as available for dependency injection (DI).

Ensures that the service can be injected into components or other services.

    @Injectable({
     providedIn: 'root'
     })
     export class DataService {
     fetchData() {
    return "Data fetched successfully!";
     }
    }

<h3> 🔹 3. Dependency Injection (DI) Concept </h3>

DI is a design pattern in Angular that allows classes (like components) to request dependencies from an external source, rather than creating them internally.

Angular injector is responsible for creating service instances and delivering them where needed.

Example: Injecting a service into a component

    import { Component, OnInit } from '@angular/core';
    import { UserService } from './user.service';

    @Component({
     selector: 'app-user-list',
    template: `
    <h3>User List</h3>
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
    `
     })
    export class UserListComponent implements OnInit {
     users: string[] = [];

    constructor(private userService: UserService) {}  // dependency injected

     ngOnInit() {
    this.users = this.userService.getUsers();
     }
     }

<h2> 🎯 Learning Outcome </h2> 

✅ Learned how to bind data (property binding) and handle events (event binding).

✅ Practiced structural & attribute directives to control DOM & styling.

✅ Applied built-in Angular pipes to transform data in templates.

✅ Created Angular services to separate business logic from components.

✅ Understood the purpose of @Injectable decorator.

✅ Learned how Angular’s Dependency Injection system works.

✅ Injected services into components for reusability & cleaner code.

✨ This covers Angular Phase 1 & Phase 2 basics – preparing the foundation for building interactive Angular applications.

<br>

# 🧱 Angular Modules, Forms, and Routing 

<h2>🗓️ Date: 05-Oct-2025 </h2>

<h1> 📦 1. Modules in Angular </h1>

Modules help organize your Angular application into logical units of functionality.
Every Angular app has at least one root module (AppModule), but larger apps are divided into Feature Modules, Shared Modules, and optionally Lazy-Loaded Modules.

<h2> 🏠 AppModule </h2> 

The root module of every Angular app, defined in app.module.ts.
It bootstraps the application and imports all other modules.

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { AppRoutingModule } from './app-routing.module';
    import { FormsModule } from '@angular/forms';

    @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    bootstrap: [AppComponent]
    })
    export class AppModule {}

<h2> 🧩 Feature Modules </h2>

Feature modules group related functionality — e.g., UsersModule, ProductsModule, OrdersModule.

    ng g m users

Example: users.module.ts

    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { UsersComponent } from './users.component';

    @NgModule({
    declarations: [UsersComponent],
    imports: [CommonModule]
    })
    export class UsersModule {}

Import this in app.module.ts (or load lazily):

    imports: [UsersModule]

<h2> 🔁 Shared Modules </h2>

For reusable components, directives, and pipes used across multiple modules.

Example: shared.module.ts

    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormsModule } from '@angular/forms';
    import { CustomPipe } from './custom.pipe';
    import { CustomDirective } from './custom.directive';

    @NgModule({
    declarations: [CustomPipe, CustomDirective],
    imports: [CommonModule],
    exports: [CommonModule, FormsModule, CustomPipe, CustomDirective]
    })
    export class SharedModule {}

✅ You export what other modules can use.

<h2> 🕐 Lazy Loading Modules </h2>

Load feature modules only when needed, improving performance.

In app-routing.module.ts:

    const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    }
    ];

In users/users-routing.module.ts:

    const routes: Routes = [
    { path: '', component: UsersComponent }
    ];

<h1> 🧠 2. Template-Driven Forms </h1>

Used for simpler forms where logic is mostly in the template.

<h2> 📥 Import FormsModule </h2>

In your module:

    import { FormsModule } from '@angular/forms';

    @NgModule({
    imports: [FormsModule]
    })
    export class AppModule {}

<h2> ✍️ Using ngModel for Two-Way Binding </h2>

    <input type="text" [(ngModel)]="userName" placeholder="Enter name">
    <p>Hello {{ userName }}!</p>

<h2> ✅ Form Validation </h2>

Angular provides built-in validation attributes:

    <form #userForm="ngForm">
     <input name="email" ngModel required email>
      <div *ngIf="userForm.controls.email?.invalid && userForm.controls.email?.touched">
      <small *ngIf="userForm.controls.email?.errors?.['required']">Email is required</small>
      <small *ngIf="userForm.controls.email?.errors?.['email']">Enter a valid email</small>
    </div>
    <button [disabled]="userForm.invalid">Submit</button>
    </form>

<h2> ⚠️ Error Handling </h2>

You can display validation messages conditionally using touched, dirty, and invalid states.

    <div *ngIf="name.invalid && name.touched" class="error">
     Name is required!
    </div>

<h1> 🚦 3. Router Basics </h1>

Angular Router lets you navigate between views (components) inside a Single Page Application (SPA).

<h2> 🗺️ Setting Up Routes </h2>

Create a file app-routing.module.ts:

    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { HomeComponent } from './home/home.component';
    import { UsersComponent } from './users/users.component';

    const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'users', component: UsersComponent }
    ];

    @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule {}

<h2> 🔗 Navigation with routerLink </h2>

    <nav>
    <a routerLink="/">Home</a>
    <a routerLink="/users">Users</a>
    </nav>

    <router-outlet></router-outlet>

    <router-outlet> is where the routed components will be displayed.

<h2> 📦 Route Parameters </h2>

Pass dynamic values in URLs.

    const routes: Routes = [
    { path: 'users/:id', component: UserDetailComponent }
    ];

In Template:

    <a [routerLink]="['/users', user.id]">View Details</a>

In Component:

    import { ActivatedRoute } from '@angular/router';

     constructor(private route: ActivatedRoute) {
     this.route.params.subscribe(params => {
    console.log(params['id']);
     });
    }
 
<h2> 🔍 Query Parameters </h2>

    <a [routerLink]="['/users']" [queryParams]="{ page: 2, sort: 'name' }">Next Page</a>

In Component:

    this.route.queryParams.subscribe(params => {
    console.log(params['page']); // 2
    });

<h2> 👶 Child Routes </h2>

Used for nested routing within a feature module.

    const routes: Routes = [
     {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: 'details/:id', component: UserDetailComponent },
      { path: 'settings', component: UserSettingsComponent }
    ]
    }
    ];

Template:

    <a routerLink="details/1">User 1 Details</a>
    <a routerLink="settings">Settings</a>

    <router-outlet></router-outlet> <!-- For child components -->

<h2> 📘 Summary Table </h2>

<table> 

  <tr>
    <th>Concept</th>
    <th>Module / Import</th>
    <th>Key Features</th>
  </tr>
  
  <tr>
   <td>Root Module</td>
   <td>AppModule</td> 
   <td>Bootstraps the app</td>
  </tr>

  <tr>
   <td>Feature Module</td>
   <td>UsersModule</td> 
   <td>Groups related components</td>
  </tr>

  <tr>
   <td>Shared Module</td>
   <td>SharedModule</td> 
   <td>Reusable utilities</td>
  </tr>

  <tr>
   <td>Lazy Loading</td>
   <td>loadChildren()</td> 
   <td>Loads on demand</td>
  </tr>

  <tr>
   <td>Forms</td>
   <td>FormsModule</td> 
   <td>Template-driven forms</td>
  </tr>

  <tr>
   <td>Routing</td>
   <td>RouterModule</td> 
   <td>Navigation setup</td>
  </tr>

  <tr>
   <td>Route Params</td>
   <td>ActivatedRoute</td> 
   <td>Dynamic URL data</td>
  </tr>

  <tr>
   <td>Query Params</td>
   <td>ActivatedRoute</td> 
   <td>Optional parameters</td>
  </tr>

  <tr>
   <td>Child Routes</td>
   <td>Nested Routes</td> 
   <td>Hierarchical navigation</td>
  </tr>
  
  
</table>          	  
       	      
	     	      
	     	      











