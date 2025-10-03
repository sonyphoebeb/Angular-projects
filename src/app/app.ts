import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomersList } from '../customers/customers-list/customers-list';
import { Calculations } from '../mathFunctions/calculations/calculations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomersList, Calculations],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-project');
}
