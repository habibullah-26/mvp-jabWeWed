import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../../core/services/vendor.service';
import { Vendor } from '../../core/models/vendor.model';

@Component({
  standalone: true,
  selector: 'app-vendor-detail',
  imports: [CommonModule],
  template: `
    <h2>Vendor Details</h2>

    <div *ngIf="vendor">
      <p><strong>Name:</strong> {{ vendor.name }}</p>
      <p><strong>Category:</strong> {{ vendor.category }}</p>
      <p><strong>City:</strong> {{ vendor.city }}</p>
      <p><strong>Price:</strong> {{ vendor.priceRange }}</p>
      <p>{{ vendor.description }}</p>
    </div>
  `
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor | undefined;

  constructor(
    private route: ActivatedRoute,
    private vendorService: VendorService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vendorService.getVendors().subscribe(list => {
      this.vendor = list.find(v => v.id === id);
    });
  }
}
