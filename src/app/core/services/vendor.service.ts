import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Vendor } from '../models/vendor.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VendorService {
  constructor(private api: ApiService) {}

  getVendors(): Observable<Vendor[]> {
    return this.api.get<Vendor[]>('vendors.json');
  }

  getVendorById(id: number): Observable<Vendor | undefined> {
    return this.api.get<Vendor[]>('vendors.json')
      .pipe(map(list => list.find(v => v.id === id)));
  }
  
}
