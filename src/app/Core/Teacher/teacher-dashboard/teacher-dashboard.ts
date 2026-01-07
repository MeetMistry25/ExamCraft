import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-dashboard',
  imports: [],
  templateUrl: './teacher-dashboard.html',
  styleUrl: './teacher-dashboard.css',
})
export class TeacherDashboard {
  stats = [
    { label: 'Uploaded Materials', value: 12, icon: 'folder_open', color: 'primary' },
    { label: 'Generated Tests', value: 5, icon: 'edit_document', color: 'secondary' },
    { label: 'Student Attempts', value: 45, icon: 'people', color: 'success' }
  ];
}
