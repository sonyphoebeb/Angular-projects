import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculations',
  imports: [FormsModule],
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
