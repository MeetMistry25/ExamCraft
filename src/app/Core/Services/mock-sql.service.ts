import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MockSqlService {
    private readonly DB_KEY = 'examcraft_temp_db_users';

    constructor() {
        this.initDb();
    }

    private initDb() {
        if (!localStorage.getItem(this.DB_KEY)) {
            console.log('Initializing temporary SQL database table: Users');
            localStorage.setItem(this.DB_KEY, JSON.stringify([]));
        }
    }

    saveUser(user: any): boolean {
        const users = JSON.parse(localStorage.getItem(this.DB_KEY) || '[]');

        // Check if email already exists (Simulate UNIQUE constraint)
        const exists = users.find((u: any) => u.email === user.email);
        if (exists) {
            console.warn(`SQL Error: Duplicate entry '${user.email}' for key 'email'`);
            return false;
        }

        // Simulate Auto-Increment ID
        const newId = users.length > 0 ? Math.max(...users.map((u: any) => u.id)) + 1 : 1;
        const newUser = { id: newId, ...user, createdAt: new Date().toISOString() };

        users.push(newUser);
        localStorage.setItem(this.DB_KEY, JSON.stringify(users));

        console.log('SQL EXEC: INSERT INTO Uses (id, fullName, email, password, role) VALUES (...)');
        console.log('Row inserted:', newUser);
        return true;
    }

    private currentUserSubject = new BehaviorSubject<any>(this.getCurrentUser());
    public currentUser$ = this.currentUserSubject.asObservable();

    getUsers() {
        return JSON.parse(localStorage.getItem(this.DB_KEY) || '[]');
    }

    validateUser(email: string, password: string): any | null {
        console.log(`SQL EXEC: SELECT * FROM Users WHERE email = '${email}' AND password = '...' LIMIT 1`);
        const users = this.getUsers();
        const user = users.find((u: any) => u.email === email && u.password === password);

        if (user) {
            console.log('User found:', user);
            this.setCurrentUser(user);
            return user;
        } else {
            console.warn('SQL Empty Set: Invalid credentials');
            return null;
        }
    }

    setCurrentUser(user: any) {
        localStorage.setItem('examcraft_current_user', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }

    getCurrentUser() {
        const userStr = localStorage.getItem('examcraft_current_user');
        return userStr ? JSON.parse(userStr) : null;
    }

    logout() {
        localStorage.removeItem('examcraft_current_user');
        this.currentUserSubject.next(null);
    }

    updateUser(updatedUser: any): boolean {
        const users = this.getUsers();
        const index = users.findIndex((u: any) => u.id === updatedUser.id);

        if (index !== -1) {
            users[index] = { ...users[index], ...updatedUser };
            localStorage.setItem(this.DB_KEY, JSON.stringify(users));

            // If updating current user, update session too
            const currentUser = this.getCurrentUser();
            if (currentUser && currentUser.id === updatedUser.id) {
                this.setCurrentUser(users[index]);
            }

            console.log(`SQL EXEC: UPDATE Users SET ... WHERE id = ${updatedUser.id}`);
            return true;
        }
        return false;
    }
}
