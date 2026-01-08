import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../Services/layout.service';

@Component({
  selector: 'app-teacher-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div class="teacher-content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .teacher-content {
      /* Padding was previously in main-content, keep it? 
         Or let individual pages handle it? 
         Let's keep some consistent padding for dashboard pages. */
      width: 100%;
      min-height: 100%;
    }
  `]
})
export class TeacherLayout { }
