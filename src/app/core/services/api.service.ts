import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private basePath = 'assets/mock-api';

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.basePath}/${endpoint}`);
  }

  post<T>(endpoint: string, data: T): Observable<T> {
    // Simulated POST
    return this.http.post<T>(`${this.basePath}/${endpoint}`, data);
  }
}
