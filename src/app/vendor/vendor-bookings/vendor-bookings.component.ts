import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vendor-bookings',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './vendor-bookings.component.html',
  styleUrl: './vendor-bookings.component.css'
})
export class VendorBookingsComponent {
  bookings = [
    { id: 1, couple: 'Ali & Sara', date: '2024-06-10', status: 'Booked', venue: 'Pearl Banquet', address: '123 Main St' },
    { id: 2, couple: 'John & Jane', date: '2024-06-12', status: 'Pending', venue: 'Royal Hall', address: '456 Elm Ave' },
    { id: 3, couple: 'Ahmed & Noor', date: '2024-06-15', status: 'Rejected', venue: 'Sunset Gardens', address: '789 Oak Rd' },
    { id: 4, couple: 'Usman & Ayesha', date: '2024-06-18', status: 'Booked', venue: 'Grand Venue', address: '321 Maple Dr' }
  ];

  statuses = ['All', 'Booked', 'Pending', 'Rejected'];
  statusFilter = new FormControl('All');
  dateSortFilter = new FormControl('Newest');

  get filteredBookings() {
    let filtered = this.bookings;
    const status = this.statusFilter.value;
    if (status !== 'All') {
      filtered = filtered.filter(b => b.status === status);
    }
    filtered = filtered.slice().sort((a, b) => {
      if (this.dateSortFilter.value === 'Newest') {
        return b.date.localeCompare(a.date);
      } else {
        return a.date.localeCompare(b.date);
      }
    });
    return filtered;
  }

  dateSortOptions = ['Newest', 'Oldest'];

  acceptBooking(booking: any) {
    booking.status = 'Booked';
  }

  rejectBooking(booking: any) {
    booking.status = 'Rejected';
  }

  viewDetail(booking: any) {
    // Placeholder for view detail logic
    alert(`Booking Details:\nCouple: ${booking.couple}\nVenue: ${booking.venue}\nAddress: ${booking.address}\nDate: ${booking.date}\nStatus: ${booking.status}`);
  }
}
