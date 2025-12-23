import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Inquiry } from '../models/inquiry.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InquiryService {

  constructor(private api: ApiService) {}

  getInquiries(): Observable<Inquiry[]> {
    return this.api.get<Inquiry[]>('inquiries.json');
  }

  addInquiry(inquiry: Inquiry): Observable<Inquiry> {
    // For mock, just return the inquiry with an id
    inquiry.id = Math.floor(Math.random() * 1000) + 1;
    return of(inquiry);
  }
}
