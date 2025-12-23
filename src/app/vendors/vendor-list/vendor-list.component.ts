import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { VendorService } from '../../core/services/vendor.service';
import { Vendor } from '../../core/models/vendor.model';

@Component({
  standalone: true,
  selector: 'app-vendor-list',
  imports: [CommonModule],
  template: `
    <h2>Vendors</h2>

    <label>
      City:
      <select (change)="filterCity($event)">
        <option value="">All</option>
        <option *ngFor="let c of cities" [value]="c">{{ c }}</option>
      </select>
    </label>

    <ul>
      <li *ngFor="let vendor of filtered">
        <a (click)="open(vendor.id)">
          {{ vendor.name }} - {{ vendor.category }} ({{ vendor.city }})
        </a>
      </li>
    </ul>
  `
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];
  filtered: Vendor[] = [];
  cities: string[] = [];

  constructor(
    private vendorService: VendorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vendorService.getVendors().subscribe(data => {
      this.vendors = data;
      this.filtered = data;
      this.cities = [...new Set(data.map(v => v.city))];
    });
  }

  filterCity(event: Event): void {
    const city = (event.target as HTMLSelectElement | null)?.value || '';
    this.filtered = city
      ? this.vendors.filter(v => v.city === city)
      : this.vendors;
  }

  open(id: number): void {
    this.router.navigate(['/vendors', id]);
  }
}
