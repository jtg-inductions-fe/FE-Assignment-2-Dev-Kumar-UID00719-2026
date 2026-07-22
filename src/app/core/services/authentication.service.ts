import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { User, AuthenticatedUser } from '@models/user';
import { STORAGE_KEYS } from '@constants/storage-keys';

import userData from '@data/user.data.json';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    private users: User[] = userData.USERS as User[];
    private currentUserSubject = new BehaviorSubject<AuthenticatedUser | null>(
        null,
    );
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);

    currentUser$ = this.currentUserSubject.asObservable();
    isLoggedIn$ = this.isLoggedInSubject.asObservable();

    constructor() {
        const storedUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
        if (storedUser) {
            const user: AuthenticatedUser = JSON.parse(storedUser);

            this.currentUserSubject.next(user);
            this.isLoggedInSubject.next(true);
        }
    }

    login(email: string, password: string): Observable<AuthenticatedUser> {
        return new Observable((observer) => {
            const user = this.users.find(
                (user) => user.email === email && user.password === password,
            );

            if (!user) {
                observer.error(new Error('Validation failed!'));
                return;
            }

            const { password: passwordToRemove, ...authenticatedUser } = user;

            localStorage.setItem(
                STORAGE_KEYS.CURRENT_USER,
                JSON.stringify(authenticatedUser),
            );

            this.currentUserSubject.next(authenticatedUser);
            this.isLoggedInSubject.next(true);

            observer.next(authenticatedUser);
            observer.complete();
        });
    }

    logout(): void {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);

        this.currentUserSubject.next(null);
        this.isLoggedInSubject.next(false);
    }

    getCurrentUser(): AuthenticatedUser | null {
        return this.currentUserSubject.value;
    }

    isLoggedIn(): boolean {
        return this.isLoggedInSubject.value;
    }
}
