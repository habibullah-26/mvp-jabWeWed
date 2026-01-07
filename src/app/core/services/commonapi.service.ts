import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Inquiry } from '../models/inquiry.model';
import { Observable, of } from 'rxjs';
import { BudgetItem } from '../models/budget.model';

@Injectable({ providedIn: 'root' })
export class CommonapiService {

  constructor(private api: ApiService) {}

  getAllBudgets(): Observable<BudgetItem[]> {
    return this.api.get<BudgetItem[]>('budget.json');
  }

  addInquiry(inquiry: Inquiry): Observable<Inquiry> {
    // For mock, just return the inquiry with an id
    inquiry.id = Math.floor(Math.random() * 1000) + 1;
    return of(inquiry);
  }
}
