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

# 🗓️ Date: 04-Oct-2025 - Today's Angular Class (Phase 1 & Phase 2)

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


<br>

# 🗓️ Date: 09-Oct-2025 - Angular Practice – Basics (Phase 1)

This repository contains practice examples for Angular, focusing on basic components, interpolation, and real-time updates without using OnInit.

<h2> 🔹 Topics Covered Today </h2>

<h3> 1. Basic Angular Component </h3>

  * Understanding the structure: TypeScript class, template, and styles.

 * Using selector to include a component in HTML.

<h3> 2. Interpolation ({{ }}) </h3> 

* Displaying dynamic data from the component in the template.

* Using expressions and calling lightweight methods.

<h3> 3. Real-Time Components (without OnInit) </h3> 

* Live Counter: increments automatically every second.

* Digital Clock (optional extension).

* Demonstrates practical dynamic UI updates.

<h2>🔹 Examples </h2>

<h3> 1️⃣ Basic Component </h3>

// app.ts

     export class AppComponent {
     title = 'Angular Basics';
     message = 'Hello, Angular!';
     }

<!-- app.html -->

     <h1>{{ title }}</h1>
     <p>{{ message }}</p>

<h3> 2️⃣ Live Counter Component (No OnInit) </h3> 

// live-counter.component.ts

    export class LiveCounterComponent {
    counter: number = 0;

     constructor() {
    setInterval(() => {
      this.counter++;
    }, 1000);
    }
    }

<!-- live-counter.component.html -->

    <div>
    <h2>Live Counter</h2>
    <p>{{ counter }}</p>
    </div>

<h3> 3️⃣ Interpolation & Expressions </h3>

    <p>2 + 3 = {{ 2 + 3 }}</p>
    <p>Message: {{ message + ' Have fun coding!' }}</p>

<h2> 🔹 How to Run </h2>

1. Clone the repository:

       git clone <repo-url>
       cd <repo-folder>

2. Install dependencies:

       npm install
   
3. Run Angular app:

       ng serve


4. Open browser at http://localhost:4200

<h2> 🔹 Notes </h2>

-> Interpolation is one-way binding: component → template.

-> Real-time updates can be done without OnInit using constructor + setInterval.

-> Components can be reused anywhere using their selector.
              
	     	      
<br>

# 🗓️ Date: 10-Oct-2025 - Angular Data Binding Practice	     	      

This repository contains simple examples demonstrating the three main types of data binding in Angular:

<h3> 1. Property Binding </h3>

<h3> 2. Event Binding </h3>

<h3> 3. Two-way Binding </h3>

These examples are designed for beginners to understand how Angular synchronizes data between the component and the template.

<h2> 🔹 1. Property Binding </h2>

Property binding allows you to set the value of an HTML element property dynamically from the component.

Example: Button enable/disable based on a component property.

// app.component.ts

    export class AppComponent {
    isDisabled = true;
    }

<!-- app.component.html -->
    <button [disabled]="isDisabled">Click Me</button>

Explanation:

* [disabled] binds the button’s disabled property to the isDisabled variable.

* Updating isDisabled in the component will automatically enable/disable the button.

<h2> 🔹 2. Event Binding </h2>

Event binding allows you to listen to events like clicks, input changes, or mouse events in the template and call methods in your component.

Example: Button click event.

// app.component.ts

    export class AppComponent {
    message = '';

    showMessage() {
    this.message = 'Hello, Angular!';
    }
   }

<!-- app.component.html -->
    <button (click)="showMessage()">Click Me</button>
    <p>{{ message }}</p>

Explanation:

* (click) binds the button click event to the showMessage() method.

* When clicked, the message is updated in the component and reflected in the template.

<h2> 🔹 3. Two-way Binding </h2>

Two-way binding allows automatic synchronization between the component property and the template input field using [(ngModel)].

Example: User Profile Form

// user-profile.component.ts

    export class UserProfileComponent {
    user = {
    name: 'Sony',
    email: 'sony@example.com'
     };
    }

<!-- user-profile.component.html -->
    <label>Name:</label>
    <input type="text" [(ngModel)]="user.name" placeholder="Enter name" />

    <label>Email:</label>
    <input type="email" [(ngModel)]="user.email" placeholder="Enter email" />

    <p><strong>Preview:</strong> {{ user.name }} - {{ user.email }}</p>

Explanation:

* [(ngModel)] binds the input field to the user object.

* Changes in the input field automatically update the component, and vice versa.

<h2> ⚡ How to Run </h2>

1. Clone the repository:

       git clone <repo-url>

2. Install dependencies:

       npm install

3. Run the application:

       ng serve

4. Open the app in your browser: http://localhost:4200

<h2> 💡 Key Takeaways </h2>

* Property Binding: Component → Template

* Event Binding: Template → Component

* Two-way Binding: Component ↔ Template

These three types of binding form the core of interactive Angular applications.


<br>

# 🗓️ Date: 11-Oct-2025 - 🌿 Angular Directives – Structural & Attribute	

This project demonstrates the use of Structural and Attribute directives in Angular with simple, real-world examples.
It helps you understand how Angular manipulates the DOM dynamically using built-in directives.

<h2> 🧱 Topics Covered </h2> 

<h3> 1 – Structural Directives </h3> 

Structural directives change the layout of the DOM by adding, removing, or manipulating elements.

<h4> 🧩 ngIf </h4> 

Conditionally adds or removes elements from the DOM.

    Example: Displaying a message only when a variable is true.

<h4> 🌀 ngFor </h4> 

Repeats a portion of the HTML for each item in an array.

    Example: Rendering a list of students, products, or tasks dynamically.

<h4> 🔄 ngSwitch </h4> 

Displays one element from multiple choices based on a condition.

    Example: Showing a different message or UI section based on user selection.

<h3> 2 – Attribute Directives </h3> 

Attribute directives change the appearance or behavior of an existing element, component, or directive.

<h4> 🎨 ngClass </h4> 

Dynamically adds or removes CSS classes based on component logic.

    Example: Toggle between “active” and “highlight” classes on button click.

<h4> 💅 ngStyle </h4> 

Dynamically applies inline styles to elements.

    Example: Change text color, background color, or font size dynamically.

<h2> 🧠 Key Learning Points </h2> 

✅ Understand how Angular directives work under the hood.

✅ Learn when to use Structural vs Attribute directives.

✅ Practice dynamic DOM manipulation in real-time.

✅ Implement reusable, interactive UI patterns.

<h2> ⚙️ Steps to Run </h2> 

1. Create a new Angular project:

       ng new directives-demo
       cd directives-demo

2. Generate required components:

       ng g c structural-directives
       ng g c attribute-directives

3. Add component selectors in app.component.html:

       <app-structural-directives></app-structural-directives>
       <app-attribute-directives></app-attribute-directives>

4. Run the app:

       ng serve

5. Open your browser and visit:

       👉 http://localhost:4200

<h2> 🖼️ Example Output </h2> 

✅ ngIf → Toggle content visibility

✅ ngFor → Display dynamic list of data

✅ ngSwitch → Conditional UI display

✅ ngClass → Dynamic class toggling

✅ ngStyle → Apply inline style dynamically



<br>

# 🗓️ Date: 15-Oct-2025 - 🧩 Angular Built-in Pipes Practice

<h2> 🔹 Overview </h2>

This module demonstrates the use of Built-in Pipes in Angular.

Pipes are used to transform data directly in the template without changing the component’s logic.

<h2>🔹 Covered Pipes </h2>

<table border="1" cellspacing="0" cellpadding="6">
  <tr>
    <th>Pipe</th>
    <th>Description</th>
    <th>Example Usage</th>
  </tr>
  <tr>
    <td>uppercase</td>
    <td>Converts text to uppercase</td>
    <td>{{ name | uppercase }}</td>
  </tr>
  <tr>
    <td>lowercase</td>
    <td>Converts text to lowercase</td>
    <td>{{ name | lowercase }}</td>
  </tr>
  <tr>
    <td>titlecase</td>
    <td>Converts the first letter of each word to uppercase</td>
    <td>{{ name | titlecase }}</td>
  </tr>
  <tr>
    <td>date</td>
    <td>Formats date values</td>
    <td>{{ today | date:'fullDate' }}</td>
  </tr>
  <tr>
    <td>currency</td>
    <td>Formats a number as a currency</td>
    <td>{{ price | currency:'INR' }}</td>
  </tr>
  <tr>
    <td>number</td>
    <td>Formats a number according to digit info</td>
    <td>{{ value | number:'1.2-2' }}</td>
  </tr>
  <tr>
    <td>percent</td>
    <td>Converts a number to a percentage</td>
    <td>{{ score | percent }}</td>
  </tr>
  <tr>
    <td>slice</td>
    <td>Returns a section of an array</td>
    <td>{{ items | slice:1:3 }}</td>
  </tr>
  <tr>
    <td>json</td>
    <td>Converts object into a JSON string</td>
    <td>{{ user | json }}</td>
  </tr>
</table>

<h2> 🧠 Concept Summary </h2> 

* Pipes are declared using the | (pipe) symbol in Angular templates.

* They help in transforming data formats dynamically without altering the actual data in the component.

<h2> 🧩 Example Output </h2> 

The demo displays:

    1. User name in various formats (uppercase, lowercase, titlecase).

    2. Current date in different formats.

    3. Prices and numbers formatted as currency and percentages.

    4. JSON representation of an object.

    5. Partial list of items using slice.

<h2> 📁 Folder Structure </h2> 

src/

 └── app/
 
      └── pipes-demo/
      
          ├── pipes-demo.component.ts
          
          ├── pipes-demo.component.html
          
          ├── pipes-demo.component.css

<h3> 🎨 Styling </h3> 

The component is styled with a simple and elegant CSS layout for better readability and presentation.

<h2> 🧾 Summary </h2>

✅ Practiced: Built-in Pipes

✅ Concepts: Data Transformation in Templates

✅ Tools Used: Angular CLI, TypeScript, HTML, CSS



<br>

# 🗓️ Date: 16-Oct-2025 - Angular Assignments

This repository contains Angular practice assignments demonstrating key concepts like directives, data binding, and built-in pipes.

<h2> 📝 Assignments Overview </h2>

<h3> Assignment 1: Directives </h3>

* Objective: Create a component that demonstrates all Angular structural and attribute directives.

* Features Implemented:

      ngIf → Conditional rendering

      ngFor → Looping through arrays

      ngSwitch → Conditional switching

      [ngClass] → Dynamic class binding

      [ngStyle] → Dynamic inline styles

<h3>  Assignment 2: Data Binding </h3>

* Objective: Demonstrate data binding techniques in Angular with a proper model execution.

* Features Implemented:

      Interpolation → Displaying component data in templates

      Property Binding → Binding HTML element properties
  
      Event Binding → Handling user events

      Two-way Binding → Synchronizing input fields with component data using [(ngModel)]

<h3> Assignment 3: Built-in Pipes </h3> 

* Objective: Create a component to demonstrate all Angular built-in pipes using different data types.

* Features Implemented:

      DatePipe → Format dates

      UpperCasePipe / LowerCasePipe / TitleCasePipe → String formatting

      CurrencyPipe / DecimalPipe / PercentPipe → Number formatting

      JsonPipe → Display objects as JSON

      SlicePipe → Array slicing

* UI Features:

      Table format with example, output, and data type columns

      Color-coded data type labels with icons for better visualization

<h3> 🔗 Technologies Used </h3> 

* Angular

* HTML & CSS

* TypeScript

<h3> 📂 Folder Structure (Sample) </h3> 

angular-assignments/

│

├── assignment1-directives/

│   └── directives-demo.component.ts/html/css

│

├── assignment2-databinding/

│   └── data-binding.component.ts/html/css

│

├── assignment3-pipes/

│   └── pipes-assignment.component.ts/html/css

│

└── README.md

<h2> 🎯 Key Learning Outcomes </h2> 

Understanding and implementing Angular directives.

Practicing data binding techniques for dynamic templates.

Using built-in pipes effectively for data transformation.

Structuring components with proper separation of logic and UI.



<br>

# 🗓️ Date: 17-Oct-2025 - Angular core topics revise

<h2> 🧩 1️⃣ Components </h2> 

<b>Definition:</b> The basic building blocks of Angular applications.

Each component controls a part of the UI.

Example:

    @Component({
    selector: 'app-hello',
    template: `<h2>Hello {{name}}!</h2>`
    })
    export class HelloComponent {
     name = 'Sony';
    }

🟢 Declared in a module (usually AppModule).

🟢 Connected using selector <app-hello></app-hello>.

<h2> ⚙️ 2️⃣ Directives </h2> 

<b>Purpose:</b> Add behavior or modify elements in the DOM.

* Structural Directives: change DOM structure
  
  *ngIf, *ngFor, *ngSwitchCase

* Attribute Directives: change element behavior or style
  
  [ngStyle], [ngClass], custom directives

Example:

    <p *ngIf="isLoggedIn">Welcome back!</p>
    <ul>
    <li *ngFor="let item of items">{{ item }}</li>
    </ul>

<h2> 🔗 3️⃣ Data Binding </h2> 

Connects your TypeScript logic and HTML template.

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Type</th>
      <th>Example</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Interpolation</td>
      <td>{{'{{ name }}'}}</td>
      <td>Display data</td>
    </tr>
    <tr>
      <td>Property Binding</td>
      <td>[disabled]="isDisabled"</td>
      <td>Bind HTML properties</td>
    </tr>
    <tr>
      <td>Event Binding</td>
      <td>(click)="onClick()"</td>
      <td>Handle events</td>
    </tr>
    <tr>
      <td>Two-way Binding</td>
      <td>[(ngModel)]="userName"</td>
      <td>Sync input and model</td>
    </tr>
  </tbody>
</table>


<h2> 💬 4️⃣ Pipes </h2>

Transform data in templates.

Example:

    <p>{{ today | date:'fullDate' }}</p>
    <p>{{ name | uppercase }}</p>

Built-in:  date, uppercase, lowercase, titlecase, currency, percent, json, slice.

<h2> 🧠 5️⃣ Lifecycle Hooks </h2> 

These are methods Angular calls during a component’s life.

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Hook</th>
      <th>When It Runs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ngOnInit()</td>
      <td>After component initialization</td>
    </tr>
    <tr>
      <td>ngOnChanges()</td>
      <td>When input data changes</td>
    </tr>
    <tr>
      <td>ngDoCheck()</td>
      <td>Custom change detection</td>
    </tr>
    <tr>
      <td>ngAfterViewInit()</td>
      <td>After view is initialized</td>
    </tr>
    <tr>
      <td>ngOnDestroy()</td>
      <td>Before component is destroyed</td>
    </tr>
  </tbody>
</table>


<h2> 🧩 6️⃣ Services & Dependency Injection </h2> 

Used for <b>logic sharing</b> (like APIs, data, state).
Services are injected into components via constructor injection.

Example:

    @Injectable({ providedIn: 'root' })
    export class UserService {
     getUser() {
    return { name: 'Sony', role: 'Student' };
     }
    }
 
    export class ProfileComponent {
    constructor(private userService: UserService) {}
    }

<h2> 🌐 7️⃣ Routing </h2> 

Handles page navigation inside SPA (Single Page App).

Example:

    const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent }
    ];

Then add <router-outlet></router-outlet> in app.component.html.


