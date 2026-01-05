import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showDropdown: boolean = false;
  constructor() {

   }

  logout(): void {
    // Clear user session data
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    // redirect to landing page
    // write code 
    window.location.href = '/';
  }
  goToProfile(): void {
    // Navigate to user profile page
    window.location.href = '/profile';
  }
  goToSettings(): void {
    // Navigate to settings page
    window.location.href = '/settings';
  }
}