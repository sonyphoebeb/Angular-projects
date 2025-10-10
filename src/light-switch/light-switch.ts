import { Component } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  imports: [],
  templateUrl: './light-switch.html',
  styleUrl: './light-switch.css'
})
export class LightSwitch {

  isOn = false; // Light is off initially

  toggleLight() {
    this.isOn = !this.isOn;
  }

}
