import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-assignment',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives-assignment.html',
  styleUrl: './directives-assignment.css'
})
export class DirectivesAssignment {

  username = 'Sony Phoebe';
  showUser = true;

  technologies = ['Angular', 'React', 'Vue', 'Svelte'];
  colors = ['Red', 'Green', 'Blue'];
  selectedColor = '';
  status = 'success';

  toggleUser() {
    this.showUser = !this.showUser;
  }

}
