import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../Shared/sidebar/sidebar';

@Component({
    selector: 'app-student-layout',
    standalone: true,
    imports: [RouterOutlet, Sidebar],
    template: `
    <div class="layout-wrapper">
      <app-sidebar role="student"></app-sidebar>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
    styles: [`
    .layout-wrapper {
      display: flex;
      height: 100vh;
      overflow: hidden;
    }
    .main-content {
      flex: 1;
      padding: 2rem;
      background-color: var(--bg-dark);
      overflow-y: auto;
      height: 100%;
    }
  `]
})
export class StudentLayout { }
