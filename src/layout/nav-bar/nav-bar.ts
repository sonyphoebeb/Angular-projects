import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoutButtonComponent } from '../../shared/logout-button/logout-button.component';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, LogoutButtonComponent],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
}
