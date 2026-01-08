import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    public theme = signal<'dark' | 'light'>('dark');

    constructor() {
        this.loadTheme();
    }

    toggleTheme() {
        const newTheme = this.theme() === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    setTheme(newTheme: 'dark' | 'light') {
        this.theme.set(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('examcraft_theme', newTheme);
    }

    private loadTheme() {
        const saved = localStorage.getItem('examcraft_theme') as 'dark' | 'light';
        if (saved) {
            this.setTheme(saved);
        } else {
            // Default to dark
            this.setTheme('dark');
        }
    }
}
