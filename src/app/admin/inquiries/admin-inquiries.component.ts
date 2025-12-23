import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inquiry } from '../../core/models/inquiry.model';
import { InquiryService } from '../../core/services/inquiry.service';

@Component({
  standalone: true,
  selector: 'app-admin-inquiries',
  imports: [CommonModule],
  templateUrl: './admin-inquiries.component.html',
  styleUrls: ['./admin-inquiries.component.css']
})
export class AdminInquiriesComponent implements OnInit {

  inquiries: Inquiry[] = [];

  constructor(private inquiryService: InquiryService) {}

  ngOnInit(): void {
    this.inquiryService.getInquiries().subscribe(data => this.inquiries = data);
  }
}
