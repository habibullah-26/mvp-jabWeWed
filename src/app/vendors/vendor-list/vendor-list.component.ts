import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { VendorService } from '../../core/services/vendor.service';
import { Vendor } from '../../core/models/vendor.model';
import { VendorCardComponent } from '../vendor-card/vendor-card.component';
import { VendorFilterComponent } from '../vendor-filter/vendor-filter.component';

@Component({
  standalone: true,
  selector: 'app-vendor-list',
  imports: [CommonModule, VendorCardComponent, VendorFilterComponent],
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {


  applyFilter($event: Event) {
    this.vendorService.getVendors().subscribe(data => {
      this.vendors = data;
    });
  }

  vendors: Vendor[] = [];
  filtered: Vendor[] = [];
  cities: string[] = [];
  filteredVendors: any;

  constructor(
    private vendorService: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vendorService.getVendors().subscribe(data => {
      this.vendors = data;
      console.log(data);
      this.filteredVendors = data;
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
