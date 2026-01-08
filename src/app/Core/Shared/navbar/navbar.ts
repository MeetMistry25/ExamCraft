import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MockSqlService } from '../../Services/mock-sql.service';
import { LayoutService } from '../../Services/layout.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  isMobileMenuOpen = false;
  currentUser: any = null;
  private mockDb = inject(MockSqlService);
  private router = inject(Router);
  private layoutService = inject(LayoutService);

  ngOnInit() {
    this.mockDb.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  get dashboardLink(): string {
    if (!this.currentUser) return '/';
    return this.currentUser.role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard';
  }

  logout() {
    this.mockDb.logout();
    this.router.navigate(['/']);
  }

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
