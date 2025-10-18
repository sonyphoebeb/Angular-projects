import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { DashboardData } from '../guards/data-resolve.guard';
import { LogoutButtonComponent } from '../shared/logout-button/logout-button.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, LogoutButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  dashboardData: DashboardData | null = null;
  currentUser: any = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
    
    // Get resolved data from route
    this.dashboardData = this.route.snapshot.data['dashboardData'];
    
    // Subscribe to authentication state
    this.authService.isAuthenticated$.subscribe(isAuth => {
      if (!isAuth) {
        this.router.navigate(['/login']);
      }
    });
  }


  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToHiringForm() {
    this.router.navigate(['/reactive-form']);
  }
}
