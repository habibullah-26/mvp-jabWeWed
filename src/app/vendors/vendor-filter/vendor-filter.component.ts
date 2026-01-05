import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vendor-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vendor-filter.component.html',
  styleUrls: ['./vendor-filter.component.css']
})
export class VendorFilterComponent {
  @Output() filterChanged = new EventEmitter<any>();

  search = '';
  category = '';
  city = '';

  applyFilter() {
    this.filterChanged.emit({
      search: this.search,
      category: this.category,
      city: this.city
    });
  }
}