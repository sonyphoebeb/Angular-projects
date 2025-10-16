import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-assignment',
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding-assignment.html',
  styleUrl: './data-binding-assignment.css'
})
export class DataBindingAssignment {

  // Interpolation
  appTitle: string = 'Angular Data Binding Demo';

  // Property Binding
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  isButtonDisabled: boolean = false;

  // Event Binding
  counter: number = 0;

  // Two-way Binding
  userInput: string = '';

  incrementCounter() {
    this.counter++;
  }

  toggleButton() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

}
