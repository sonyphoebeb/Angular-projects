import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule],
  templateUrl: './structural-directives.html',
  styleUrl: './structural-directives.css'
})
export class StructuralDirectives {

  // *ngIf example
  isLoggedIn: boolean = true;

  // *ngFor example
  products: string[] = ['Laptop', 'Mobile', 'Tablet', 'Smartwatch'];

  // *ngSwitch example
  day: string = 'Friday';

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  changeDay(newDay: string) {
    this.day = newDay;
  }

  onDayChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.day = target.value;
  }

}
