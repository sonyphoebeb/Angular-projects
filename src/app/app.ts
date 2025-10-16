import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomersList } from '../customers/customers-list/customers-list';
import { Calculations } from '../mathFunctions/calculations/calculations';
import { About } from './users/about/about';
import { NavBar } from '../layout/nav-bar/nav-bar';
import { LiveCounter } from '../counter/live-counter/live-counter';
import { LightSwitch } from '../light-switch/light-switch';
import { EventBinding } from '../event-binding/event-binding';
import { UserProfile } from '../user-profile/user-profile';
import { StructuralDirectives } from '../structural-directives/structural-directives';
import { AttributeDirectives } from '../attribute-directives/attribute-directives';
import { BuiltInPipes } from '../built-in-pipes/built-in-pipes';
import { DirectivesAssignment } from '../directives-assignment/directives-assignment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomersList, Calculations, About, 
    NavBar, LiveCounter, LightSwitch, EventBinding, UserProfile,
    StructuralDirectives, AttributeDirectives, BuiltInPipes,
    DirectivesAssignment],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-project');
}
