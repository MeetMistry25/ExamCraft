import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, CommonModule],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css'
})
export class Sidebar {
    @Input() role: 'teacher' | 'student' = 'teacher';

    menuItems: any = {
        teacher: [
            { label: 'Dashboard', link: '/teacher/dashboard', icon: 'dashboard' }, // Adjusted link to match routes I'll fix
            { label: 'Upload Material', link: '/teacher/upload-material', icon: 'upload_file' },
            { label: 'Materials', link: '/teacher/material', icon: 'folder' },
            { label: 'Generate Paper', link: '/teacher/question/generate', icon: 'auto_awesome' },
            // { label: 'Review', link: '/teacher/question/preview', icon: 'visibility' }, 
            { label: 'Performance', link: '/teacher/student-performance', icon: 'bar_chart' }
        ],
        student: [
            { label: 'Dashboard', link: '/student/dashboard', icon: 'dashboard' }, // Adjusted
            { label: 'Tests', link: '/student/available-tests', icon: 'assignment' },
            { label: 'Results', link: '/student/test-result', icon: 'fact_check' },
            { label: 'Analysis', link: '/student/performance-analysis', icon: 'insights' }
        ]
    };
}
