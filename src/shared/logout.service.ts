import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   * Logout user and redirect to login page
   * @param showConfirmation - Whether to show confirmation dialog
   * @param redirectTo - Optional redirect path after logout
   */
  logout(showConfirmation: boolean = true, redirectTo: string = '/login'): void {
    if (showConfirmation) {
      const confirmed = confirm('Are you sure you want to logout?');
      if (!confirmed) {
        return;
      }
    }

    // Clear authentication state
    this.authService.logout();
    
    // Show logout message
    alert('You have been logged out successfully.');
    
    // Navigate to login page
    this.router.navigate([redirectTo]);
  }

  /**
   * Silent logout without confirmation
   */
  silentLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  /**
   * Logout with custom message
   */
  logoutWithMessage(message: string): void {
    this.authService.logout();
    alert(message);
    this.router.navigate(['/login']);
  }
}
