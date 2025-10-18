import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutButtonComponent } from '../../shared/logout-button/logout-button.component';

@Component({
  selector: 'app-live-counter',
  imports: [CommonModule, LogoutButtonComponent],
  templateUrl: './live-counter.html',
  styleUrl: './live-counter.css'
})
export class LiveCounter {
  counter: number = 0;

  constructor() {
    // Increment counter every second
    setInterval(() => {
      this.counter++;
    }, 1000);
  }
}
