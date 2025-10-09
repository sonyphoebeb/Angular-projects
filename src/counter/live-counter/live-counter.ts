import { Component } from '@angular/core';

@Component({
  selector: 'app-live-counter',
  imports: [],
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
