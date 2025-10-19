import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    console.log('AuthGuard: Checking authentication state');
    console.log('AuthGuard: isAuthenticated =', this.authService.isAuthenticated);
    console.log('AuthGuard: currentUser =', this.authService.currentUser);
    
    if (this.authService.isAuthenticated) {
      console.log('AuthGuard: User is authenticated, allowing access');
      return true;
    } else {
      console.log('AuthGuard: User is not authenticated, redirecting to login');
      // Store the attempted URL for redirecting after login
      this.router.navigate(['/login'], { 
        queryParams: { returnUrl: state.url } 
      });
      return false;
    }
  }
}
