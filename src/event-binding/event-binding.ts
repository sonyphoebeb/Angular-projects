import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {

  message: string = '';
  log: string[] = [];

  onClick() {
    this.log.push('Button clicked!');
  }

  onDoubleClick() {
    this.log.push('Button double-clicked!');
  }

  onMouseEnter() {
    this.log.push('Mouse entered the button!');
  }

  onMouseLeave() {
    this.log.push('Mouse left the button!');
  }

  onKeyUp(event: KeyboardEvent) {
    this.message = (event.target as HTMLInputElement).value;
    this.log.push(`Key pressed: ${(event.target as HTMLInputElement).value}`);
  }

  onFocus() {
    this.log.push('Input focused!');
  }

  onBlur() {
    this.log.push('Input lost focus!');
  }

  onInput(event: Event) {
    this.message = (event.target as HTMLInputElement).value;
  }

  clearLog() {
    this.log = [];
    this.message = '';
  }

}
