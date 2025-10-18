import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogoutButtonComponent } from '../shared/logout-button/logout-button.component';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule, CommonModule, LogoutButtonComponent],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {
  user = {
    name: 'Sony',
    email: 'sony@example.com'
  };

  // Optional: method to display updated info
  saveProfile() {
    alert(`Profile saved!\nName: ${this.user.name}\nEmail: ${this.user.email}`);
  }
}
