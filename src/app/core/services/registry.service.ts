import { Injectable } from '@angular/core';
import { Registry } from '../models/registry.model';
import { Observable } from 'rxjs';
import { Invitation } from '../models/invitation.model';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class RegistryService {
    private data: Registry[] = [];

    constructor(private api: ApiService) { }
    getAllRegistries(): Observable<Registry[]> {
        return this.api.get<Registry[]>('registry.json');
    }


    search(firstName: string, lastName: string, month?: string, year?: string): Registry[] {
        return this.data.filter(r => {
            const date = new Date(r.weddingDate);
            return (!firstName || r.firstName.toLowerCase().includes(firstName.toLowerCase()))
                && (!lastName || r.lastName.toLowerCase().includes(lastName.toLowerCase()))
                && (!month || date.getMonth() + 1 === +month)
                && (!year || date.getFullYear() === +year);
        });
    }
}
