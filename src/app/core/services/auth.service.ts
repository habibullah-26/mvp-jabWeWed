import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../models/user.model';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly STORAGE_KEY = 'loggedInUser';

  constructor(private api: ApiService) {}

  login(email: string, password: string): Observable<User | null> {
    return this.api.get<User[]>('users.json').pipe(
      map(users => {
        const user = users.find(
          u => u.email === email && u.password === password
        );
        if (user) {
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
          return user;
        }
        return null;
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  getCurrentUser(): User | null {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }
}
