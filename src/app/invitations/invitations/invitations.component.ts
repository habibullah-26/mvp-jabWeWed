import { Component, OnInit } from '@angular/core';
import { Invitation } from '../../core/models/invitation.model';
import { InvitationService } from '../../core/services/Invitation.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-invitations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {
  allInvitations: Invitation[] = [];
  floralInvitations: Invitation[] = [];

  invitations: Invitation[] = [];
  styles: string[] = ['Floral', 'Modern', 'Classic', 'Rustic'];
  types: string[] = ['Digital', 'Printed'];
  selectedStyle: string = '';
  selectedType: string = '';
  maxPrice: number | null = null;

  constructor(private invitationService: InvitationService) {}

  ngOnInit(): void {
    this.invitationService.getAllInvitations().subscribe(invitations => {
      this.allInvitations = invitations;
      this.floralInvitations = this.invitationService.getByStyle('Floral');
      this.invitations = this.allInvitations;
    });

    console.log(this.allInvitations);
  }

  // Example button methods (add your actual logic as needed)
  onAddInvitation() {
    // Add invitation logic here
  }

  onEditInvitation(invitation: Invitation) {
    // Edit invitation logic here
  }

  onDeleteInvitation(invitation: Invitation) {
    // Delete invitation logic here
  }
}
