import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, delay } from 'rxjs';

export interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface DashboardData {
  totalUsers: number;
  totalOrders: number;
  revenue: number;
  recentActivity: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UserDataResolver implements Resolve<UserData> {
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserData> | Promise<UserData> | UserData {
    
    // Simulate API call delay
    return of({
      id: 1,
      name: 'Sony Medsquire',
      email: 'sonymedsquire@example.com',
      role: 'Administrator'
    }).pipe(delay(1000));
  }
}

@Injectable({
  providedIn: 'root'
})
export class DashboardDataResolver implements Resolve<DashboardData> {
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<DashboardData> | Promise<DashboardData> | DashboardData {
    
    // Simulate API call delay
    return of({
      totalUsers: 1250,
      totalOrders: 3420,
      revenue: 125000,
      recentActivity: [
        'New user registered',
        'Order #1234 completed',
        'Payment received',
        'System backup completed'
      ]
    }).pipe(delay(800));
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProfileDataResolver implements Resolve<any> {
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    
    // Get user ID from route parameters
    const userId = route.paramMap.get('id');
    
    // Simulate API call to fetch user profile
    return of({
      id: userId,
      username: 'sonymedsquire',
      firstName: 'Sony',
      lastName: 'Medsquire',
      email: 'sonymedsquire@example.com',
      phone: '+1-555-0123',
      address: '123 Main St, City, State 12345',
      joinDate: '2024-01-01',
      lastLogin: new Date().toISOString()
    }).pipe(delay(500));
  }
}
