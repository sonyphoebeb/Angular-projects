import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  // Hardcoded user credentials
  private readonly validUser: User = {
    username: 'sonymedsquire',
    password: 'Welcome@3164'
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if user is already logged in (from localStorage) - only in browser
    if (isPlatformBrowser(this.platformId)) {
      this.checkStoredAuth();
    }
  }

  // Observable for authentication state
  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Observable for current user
  get currentUser$(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  // Get current authentication state
  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  // Get current user
  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Login method
  login(username: string, password: string): boolean {
    console.log('AuthService.login called with:', { username, password });
    console.log('Valid user credentials:', this.validUser);
    
    if (username === this.validUser.username && password === this.validUser.password) {
      console.log('✅ Credentials match - setting authenticated to true');
      this.isAuthenticatedSubject.next(true);
      this.currentUserSubject.next(this.validUser);
      
      // Store authentication state in localStorage (only in browser)
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', JSON.stringify(this.validUser));
        console.log('✅ Authentication state stored in localStorage');
      }
      
      return true;
    } else {
      console.log('❌ Credentials do not match - login failed');
      // Clear any existing authentication state when login fails
      this.clearAuthenticationState();
      return false;
    }
  }

  // Clear authentication state
  private clearAuthenticationState(): void {
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
    
    // Clear localStorage (only in browser)
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('currentUser');
      console.log('🧹 Authentication state cleared from localStorage');
    }
  }

  // Logout method
  logout(): void {
    console.log('AuthService: Logging out user');
    this.clearAuthenticationState();
  }

  // Check stored authentication on app initialization
  private checkStoredAuth(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    const isAuth = localStorage.getItem('isAuthenticated');
    const userStr = localStorage.getItem('currentUser');
    
    if (isAuth === 'true' && userStr) {
      try {
        const user = JSON.parse(userStr);
        this.isAuthenticatedSubject.next(true);
        this.currentUserSubject.next(user);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        this.clearStoredAuth();
      }
    }
  }

  // Clear stored authentication
  private clearStoredAuth(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('currentUser');
    }
  }

  // Validate token (for future JWT implementation)
  validateToken(): boolean {
    return this.isAuthenticated;
  }

  // Method to clear all authentication data (useful for testing)
  clearAllAuthData(): void {
    console.log('AuthService: Clearing all authentication data');
    this.clearAuthenticationState();
  }
}
