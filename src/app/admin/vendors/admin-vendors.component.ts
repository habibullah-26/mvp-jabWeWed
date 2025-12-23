import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorService } from '../../core/services/vendor.service';
import { Vendor } from '../../core/models/vendor.model';

@Component({
  standalone: true,
  selector: 'app-admin-vendors',
  imports: [CommonModule],
  templateUrl: './admin-vendors.component.html',
  styleUrls: ['./admin-vendors.component.css']
})
export class AdminVendorsComponent implements OnInit {

  vendors: Vendor[] = [];

  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    this.vendorService.getVendors().subscribe(data => this.vendors = data);
  }
}
