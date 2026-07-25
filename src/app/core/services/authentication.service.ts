import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

import { User, AuthenticatedUser, Role } from '@models/user';
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

    currentUser$ = this.currentUserSubject.asObservable();

    constructor() {
        const storedUser = this.getFromLocalStorage(STORAGE_KEYS.CURRENT_USER);
        if (storedUser) {
            const user: AuthenticatedUser = JSON.parse(storedUser);

            this.currentUserSubject.next(user);
        }
    }

    login(email: string, password: string): Observable<AuthenticatedUser> {
        const user = this.users.find(
            (user) => user.email === email && user.password === password,
        );

        if (!user) {
            return throwError(() => new Error('Validation failed!'));
        }

        const { password: _password, ...authenticatedUser } = user;

        console.log('CHecking aurt', authenticatedUser);

        this.setInLocalStorage(STORAGE_KEYS.CURRENT_USER, authenticatedUser);

        this.currentUserSubject.next(authenticatedUser);

        return of(authenticatedUser);
    }

    logout(): Observable<void> {
        this.removeFromLocalStorage(STORAGE_KEYS.CURRENT_USER);
        this.currentUserSubject.next(null);
        return of(void 0);
    }

    getCurrentUser(): AuthenticatedUser | null {
        return this.currentUserSubject.value;
    }

    isLoggedIn(): boolean {
        return this.currentUserSubject.value !== null;
    }

    isAdmin(): boolean {
        const user = this.getCurrentUser();
        return user?.role === Role.Admin;
    }

    setInLocalStorage(key: string, data: object) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    getFromLocalStorage(key: string) {
        return localStorage.getItem(key);
    }

    removeFromLocalStorage(key: string) {
        localStorage.removeItem(key);
    }
}
