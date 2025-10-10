import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule],
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
