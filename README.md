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

🔹 1. Property Binding

Bind component properties to HTML attributes using [ ].

<img [src]="userImage" [alt]="userName">
<input [value]="userEmail">

🔹 2. Event Binding

Capture user actions/events using ( ).

<button (click)="onLogin()">Login</button>
<input (input)="onInputChange($event)">

🔹 3. Structural Directives

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

🔹 4. Attribute Directives

✔ ngClass → Dynamic classes

<p [ngClass]="{ 'active': isActive, 'inactive': !isActive }">Status</p>


✔ ngStyle → Inline styles dynamically

<p [ngStyle]="{ 'color': isActive ? 'green' : 'red' }">
  {{ isActive ? 'Active' : 'Inactive' }}
</p>

<h2> 🚀 Phase 2: Building Blocks – Pipes </h2>

🔹 Built-in Pipes

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

<h2> 🎯 Learning Outcome </h2> 

✅ Learned how to bind data (property binding) and handle events (event binding).

✅ Practiced structural & attribute directives to control DOM & styling.

✅ Applied built-in Angular pipes to transform data in templates.

✨ This covers Angular Phase 1 & Phase 2 basics – preparing the foundation for building interactive Angular applications.
