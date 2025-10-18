import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: any,
    currentState: any,
    nextState?: any
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    // If component has canDeactivate method, use it
    if (component && typeof component.canDeactivate === 'function') {
      return component.canDeactivate();
    }
    
    // Default behavior - allow navigation
    return true;
  }
}

// Example implementation for forms with unsaved changes
@Injectable({
  providedIn: 'root'
})
export class FormDeactivateGuard implements CanDeactivate<any> {
  
  canDeactivate(component: any): boolean {
    // Check if form has unsaved changes
    if (component && component.hasUnsavedChanges) {
      return confirm('You have unsaved changes. Are you sure you want to leave this page?');
    }
    
    return true;
  }
}
