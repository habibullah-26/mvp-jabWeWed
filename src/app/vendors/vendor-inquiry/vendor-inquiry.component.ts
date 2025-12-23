import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../../core/services/vendor.service';
import { InquiryService } from '../../core/services/inquiry.service';
import { Vendor } from '../../core/models/vendor.model';
import { Inquiry } from '../../core/models/inquiry.model';

@Component({
  standalone: true,
  selector: 'app-vendor-inquiry',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Vendor Inquiry</h2>

    <p *ngIf="vendor"><strong>Vendor:</strong> {{ vendor.name }}</p>

    <form [formGroup]="form" (ngSubmit)="submit()">
      <input placeholder="Your Name" formControlName="name" />
      <input placeholder="Email" formControlName="email" />
      <textarea placeholder="Message" formControlName="message"></textarea>
      <button type="submit" [disabled]="form.invalid">Send Inquiry</button>
    </form>

    <p *ngIf="submitted" style="color:green">Inquiry submitted!</p>
  `
})
export class VendorInquiryComponent implements OnInit {

  vendor: Vendor | undefined;
  form!: FormGroup;
  submitted = false;
  vendorId = 0;

  constructor(
    private route: ActivatedRoute,
    private vendorService: VendorService,
    private inquiryService: InquiryService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.vendorId = Number(this.route.snapshot.paramMap.get('id'));
    this.vendorService.getVendors().subscribe(list => {
      this.vendor = list.find(v => v.id === this.vendorId);
    });

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.form.invalid || !this.vendor) return;

    const inquiry: Inquiry = {
      ...this.form.value,
      vendorId: this.vendor.id,
      id: 0
    };

    this.inquiryService.addInquiry(inquiry).subscribe(() => {
      this.submitted = true;
      this.form.reset();
    });
  }
}
