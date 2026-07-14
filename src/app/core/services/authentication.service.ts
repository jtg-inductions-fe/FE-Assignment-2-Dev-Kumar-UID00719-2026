import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { USERS } from '../data/user.data';
import { Role, User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    private users: User[] = [...USERS];

    private currentUserSubject = new BehaviorSubject<User | null>(null);

    currentUser$ = this.currentUserSubject.asObservable();

    login(email: string, password: string): boolean {
        const user = this.users.find(
            (user) => user.email === email && user.password === password,
        );

        if (!user) {
            return false;
        }

        this.currentUserSubject.next(user);
        return true;
    }

    logout(): void {
        this.currentUserSubject.next(null);
    }

    register(
        email: string,
        password: string,
        role: Role,
        name: string,
    ): boolean {
        const existingUser = this.users.find((user) => user.email === email);

        if (existingUser) {
            return false;
        }

        const newUser: User = {
            id: this.users.length + 1,
            name,
            email,
            password,
            role,
        };

        this.users.push(newUser);
        return true;
    }

    getCurrentUser(): User | null {
        return this.currentUserSubject.value;
    }

    isLoggedIn(): boolean {
        return this.currentUserSubject.value !== null;
    }
}
