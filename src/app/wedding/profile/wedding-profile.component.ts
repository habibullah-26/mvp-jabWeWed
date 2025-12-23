import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { WeddingProfile } from '../../core/models/profile.model';

@Component({
  standalone: true,
  selector: 'app-wedding-profile',
  imports: [CommonModule],
  template: `
    <h2>Wedding Profile</h2>

    <div *ngIf="profile">
      <p><strong>Date:</strong> {{ profile.weddingDate }}</p>
      <p><strong>City:</strong> {{ profile.city }}</p>
      <p><strong>Budget:</strong> {{ profile.budgetRange }}</p>
    </div>
  `
})
export class WeddingProfileComponent implements OnInit {

  profile: WeddingProfile | null = null;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get<WeddingProfile>('profile.json')
      .subscribe(data => this.profile = data);
  }
}
