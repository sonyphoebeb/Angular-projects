import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogoutButtonComponent } from '../../shared/logout-button/logout-button.component';

@Component({
  selector: 'app-calculations',
  imports: [FormsModule, CommonModule, LogoutButtonComponent],
  templateUrl: './calculations.html',
  styleUrl: './calculations.css'
})
export class Calculations {
  
  a: number = 0;
  b: number = 0;
  result: number = 0;
  add = () => {
    this.result = this.a + this.b;
  };
  subtract = () => {
    this.result = this.a - this.b;
  };
  multiply = () => {
    this.result = this.a * this.b;
  };
  divide = () => {
    this.result = this.a / this.b;
  };

}
