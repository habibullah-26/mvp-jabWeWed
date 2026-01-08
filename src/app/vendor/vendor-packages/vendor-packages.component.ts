import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendor-packages',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './vendor-packages.component.html',
  styleUrl: './vendor-packages.component.css'
})
export class VendorPackagesComponent {
  packages = [
    { id: 1, name: 'Silver Package', price: 50000, details: 'Basic decoration, 100 guests' },
    { id: 2, name: 'Gold Package', price: 90000, details: 'Premium decoration, 200 guests, DJ' }
  ];

  showDialog = false;
  isEdit = false;
  editingIndex: number | null = null;
  packageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.packageForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      details: ['', Validators.required]
    });
  }

  addPackage() {
    this.packageForm.reset();
    this.isEdit = false;
    this.editingIndex = null;
    this.showDialog = true;
  }

  editPackage(pkg: any) {
    this.packageForm.setValue({
      name: pkg.name,
      price: pkg.price,
      details: pkg.details
    });
    this.isEdit = true;
    this.editingIndex = this.packages.indexOf(pkg);
    this.showDialog = true;
  }

  savePackage() {
    if (this.packageForm.valid) {
      const { name, price, details } = this.packageForm.value;
      if (this.isEdit && this.editingIndex !== null) {
        this.packages[this.editingIndex] = {
          ...this.packages[this.editingIndex],
          name,
          price,
          details
        };
      } else {
        this.packages.push({
          id: this.packages.length + 1,
          name,
          price,
          details
        });
      }
      this.showDialog = false;
    }
  }

  closeDialog() {
    this.showDialog = false;
  }

  deletePackage(pkg: any) {
    const idx = this.packages.indexOf(pkg);
    if (idx > -1) this.packages.splice(idx, 1);
  }
}
