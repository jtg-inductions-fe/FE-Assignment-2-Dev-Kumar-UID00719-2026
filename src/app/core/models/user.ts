export enum Role {
    Admin,
    Owner,
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;
    profileImageUrl: string;
}

export type AuthenticatedUser = Omit<User, 'password'>;
