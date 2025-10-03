# 📅 03-Oct-2025 – Angular Basics

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

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


2️⃣ New Project & Component Creation

Create a new folder inside src/

Open terminal in that folder

Generate a new component:

ng g c users-list

3️⃣ Selectors

Selectors help use components inside other components.

Example:

<app-users-list></app-users-list>

4️⃣ ngModel

Enables two-way data binding between HTML and component class.

Example:

<input [(ngModel)]="username" placeholder="Enter name">
<p>Welcome, {{ username }}!</p>

5️⃣ Interpolation

Used to display dynamic values in templates.

Example:

<h2>{{ title }}</h2>

6️⃣ Subcomponent Declarations with Selectors

You can nest components using their selectors inside parent templates.

Example:

<app-header></app-header>
<app-users-list></app-users-list>
<app-footer></app-footer>


✨ This covers today’s practice: Installation → New Project → Components → Data Binding → Selectors.
