import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendor-awards',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './vendor-awards.component.html',
  styleUrl: './vendor-awards.component.css'
})
export class VendorAwardsComponent {
  rewards = [
    { id: 1, name: 'Best Service', year: 2022 },
    { id: 2, name: 'Top Vendor', year: 2023 }
  ];

  showDialog = false;
  rewardForm: FormGroup;
  isEdit = false;
  editingRewardIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.rewardForm = this.fb.group({
      name: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });
  }

  addReward() {
    this.rewardForm.reset();
    this.isEdit = false;
    this.editingRewardIndex = null;
    this.showDialog = true;
  }

  editReward(reward: any) {
    this.rewardForm.setValue({
      name: reward.name,
      year: reward.year
    });
    this.isEdit = true;
    this.editingRewardIndex = this.rewards.indexOf(reward);
    this.showDialog = true;
  }

  saveReward() {
    if (this.rewardForm.valid) {
      const { name, year } = this.rewardForm.value;
      if (this.isEdit && this.editingRewardIndex !== null) {
        this.rewards[this.editingRewardIndex] = {
          ...this.rewards[this.editingRewardIndex],
          name,
          year
        };
      } else {
        this.rewards.push({
          id: this.rewards.length + 1,
          name,
          year
        });
      }
      this.showDialog = false;
    }
  }

  closeDialog() {
    this.showDialog = false;
  }

  deleteReward(reward: any) {
    // Placeholder for delete reward logic
  }
}
