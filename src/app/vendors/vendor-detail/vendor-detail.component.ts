import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from '../../core/models/vendor.model';
import { CommonModule } from '@angular/common';
import { VendorService } from '../../core/services/vendor.service';

@Component({
  selector: 'app-vendor-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor!: Vendor | undefined;
  vendorId!: number;

  constructor(private route: ActivatedRoute,private vendorService: VendorService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
      this.vendorId = +id;
      this.vendorService.getVendorById(this.vendorId).subscribe((vendorData) => {
        this.vendor = vendorData;
      });
      }
    });

  }
}
