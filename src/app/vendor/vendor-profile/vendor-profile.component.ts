import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vendor-profile.component.html',
  styleUrl: './vendor-profile.component.css'
})
export class VendorProfileComponent {
  vendorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.vendorForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      city: ['', Validators.required],
      priceRange: ['', Validators.required],
      rating: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.vendorForm.valid) {
      // You can replace this with your API call
      console.log('Vendor Profile:', this.vendorForm.value);
    }
  }
}