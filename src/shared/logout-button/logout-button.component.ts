import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-logout-button',
  imports: [CommonModule],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.css'
})
export class LogoutButtonComponent {
  @Input() showConfirmation: boolean = true;
  @Input() buttonText: string = 'Logout';
  @Input() buttonClass: string = 'logout-btn';
  @Input() showIcon: boolean = true;
  @Input() redirectTo: string = '/login';

  constructor(private logoutService: LogoutService) {}

  onLogout() {
    this.logoutService.logout(this.showConfirmation, this.redirectTo);
  }
}
