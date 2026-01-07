
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { WeddingProfile } from '../../core/models/profile.model';

@Component({
  standalone: true,
  selector: 'app-wedding-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './wedding-profile.component.html',
  styleUrls: ['./wedding-profile.component.css']
})
export class WeddingProfileComponent implements OnInit {

  profile: WeddingProfile | null = null;
  profileForm!: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      coRegistrant: [''],
      weddingDate: ['', Validators.required],
      venue: [''],
      city: ['', Validators.required],
      budgetRange: [''],
      website: ['']
    });

    // Optionally load existing profile data
    this.api.get<WeddingProfile>('profile.json')
      .subscribe(data => {
        this.profile = data;
        if (data) {
          this.profileForm.patchValue(data as any);
        }
      });
  }

  saveProfile() {
    if (this.profileForm.valid) {
      // Save logic here (API call or local update)
      this.profile = this.profileForm.value;
      // Optionally show a success message
    }
  }
}
