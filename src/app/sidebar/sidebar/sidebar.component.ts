import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { USER_ROLES } from '../../utilities/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  role: string = USER_ROLES.USER;
  _userRoles = USER_ROLES;
  constructor() {
    const storedRole = localStorage.getItem('role');
    console.log("Sidebar role:", storedRole);
    if (storedRole) {
      this.role = storedRole;
      if (this.role === USER_ROLES.ADMIN) {
        // Admin specific logic can go here if needed
      }
    }
   }
}
