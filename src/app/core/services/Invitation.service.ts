import { Injectable } from '@angular/core';
import { Invitation } from '../models/invitation.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
    providedIn: 'root'
})
export class InvitationService {

    private invitations: Invitation[] = [];

    constructor(private api: ApiService) { }


    getAllInvitations(): Observable<Invitation[]> {
        return this.api.get<Invitation[]>('invitations.json');
    }
    /** Get all invitations */
    getAll(): Invitation[] {
        return this.invitations;
    }

    /** Get invitation by ID */
    getById(id: number): Invitation | undefined {
        return this.invitations.find(invite => invite.id === id);
    }

    /** Get invitations by style */
    getByStyle(style: string): Invitation[] {
        return this.invitations.filter(invite => invite.style.toLowerCase() === style.toLowerCase());
    }

    /** Get invitations by collection */
    getByCollection(collection: string): Invitation[] {
        return this.invitations.filter(invite => invite.collection.toLowerCase() === collection.toLowerCase());
    }

    /** Get invitations by price range */
    getByPriceRange(min: number, max: number): Invitation[] {
        return this.invitations.filter(invite => invite.price >= min && invite.price <= max);
    }

    /** Get invitations by rating (minimum) */
    getByRating(minRating: number): Invitation[] {
        return this.invitations.filter(invite => invite.rating >= minRating);
    }

    /** Search invitations by title keyword */
    searchByTitle(keyword: string): Invitation[] {
        return this.invitations.filter(invite =>
            invite.title.toLowerCase().includes(keyword.toLowerCase())
        );
    }
}
