import { Role, User } from '../models/user';

export const USERS: User[] = [
    {
        id: 1,
        name: 'Admin',
        email: 'admin@test.com',
        password: 'admin123',
        role: Role.Admin,
    },
    {
        id: 2,
        name: 'Restaurant Owner',
        email: 'owner@test.com',
        password: 'owner123',
        role: Role.Owner,
    },
];
