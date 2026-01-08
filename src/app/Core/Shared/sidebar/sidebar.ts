import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MockSqlService } from '../../Services/mock-sql.service';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, CommonModule],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {
    @Input() role: 'teacher' | 'student' = 'teacher';
    private mockDb = inject(MockSqlService);
    private router = inject(Router); // Note: Router needs to be imported or injected
    currentUser: any = null;

    ngOnInit() {
        this.mockDb.currentUser$.subscribe(user => {
            this.currentUser = user;
        });
    }

    logout() {
        this.mockDb.logout();
        this.router.navigate(['/login']);
    }

    menuItems: any = {
        teacher: [
            { label: 'Dashboard', link: '/teacher/dashboard', icon: 'dashboard' },
            { label: 'Upload Material', link: '/teacher/upload-material', icon: 'upload_file' },
            { label: 'Materials', link: '/teacher/material', icon: 'folder' },
            { label: 'Generate Paper', link: '/teacher/question/generate', icon: 'auto_awesome' },
            { label: 'Performance', link: '/teacher/student-performance', icon: 'bar_chart' }
        ],
        student: [
            { label: 'Dashboard', link: '/student/dashboard', icon: 'dashboard' },
            { label: 'Tests', link: '/student/available-tests', icon: 'assignment' },
            { label: 'Results', link: '/student/test-result', icon: 'fact_check' },
            { label: 'Analysis', link: '/student/performance-analysis', icon: 'insights' }
        ]
    };

    footerItems: any = {
        teacher: [
            { label: 'Profile', link: '/teacher/profile', icon: 'person' },
            { label: 'Settings', link: '/teacher/settings', icon: 'settings' }
        ],
        student: [
            { label: 'Profile', link: '/student/profile', icon: 'person' },
            { label: 'Settings', link: '/student/settings', icon: 'settings' }
        ]
    };
}
