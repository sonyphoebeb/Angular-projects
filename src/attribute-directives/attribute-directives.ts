import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.css'
})
export class AttributeDirectives {

  // ngClass example
  isActive: boolean = false;
  isHighlighted: boolean = false;

  // ngStyle example
  fontSize: string = '16px';
  textColor: string = 'black';
  backgroundColor: string = 'white';

  toggleClasses() {
    this.isActive = !this.isActive;
    this.isHighlighted = !this.isHighlighted;
  }

  increaseFont() {
    this.fontSize = parseInt(this.fontSize) + 2 + 'px';
  }

  changeTheme(color: string) {
    this.textColor = color;
    this.backgroundColor = color === 'white' ? 'black' : 'white';
  }

}
