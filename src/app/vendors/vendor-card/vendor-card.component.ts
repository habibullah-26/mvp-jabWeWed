import { Component, Input } from '@angular/core';
import { Vendor } from '../../core/models/vendor.model';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from '../../shared/image-slider/image-slider.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-card',
  standalone: true,
  imports: [CommonModule,ImageSliderComponent,RouterModule],
  templateUrl: './vendor-card.component.html',
  styleUrls: ['./vendor-card.component.css']
})
export class VendorCardComponent {
  @Input() vendor!: Vendor;

  constructor(private router: Router) {}

  moveToDetail() {
    debugger;
    this.router.navigate([`/vendors/${this.vendor.id}`]);
  }
}