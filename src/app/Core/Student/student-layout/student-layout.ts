import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../Services/layout.service';

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div class="student-content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .student-content {
      width: 100%;
      min-height: 100%;
    }
  `]
})
export class StudentLayout { }
