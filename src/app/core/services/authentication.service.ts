import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Role, User } from '@models/user';
import { USERS } from '@data/user.data';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    private users: User[] = [...USERS];
    private currentUserSubject = new BehaviorSubject<User | null>(null);
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);

    currentUser$ = this.currentUserSubject.asObservable();
    isLoggedIn$ = this.isLoggedInSubject.asObservable();

    login(email: string, password: string): void {
        const user = this.users.find(
            (user) => user.email === email && user.password === password,
        );

        if (!user) {
            return;
        }

        this.currentUserSubject.next(user);
        this.isLoggedInSubject.next(true);
    }

    logout(): void {
        this.currentUserSubject.next(null);
        this.isLoggedInSubject.next(false);
    }

    getCurrentUser(): User | null {
        return this.currentUserSubject.value;
    }

    isLoggedIn(): boolean {
        return this.isLoggedInSubject.value;
    }
}
