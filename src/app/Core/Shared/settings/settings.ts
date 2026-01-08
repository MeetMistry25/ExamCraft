import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../Services/theme.service';
import { MockSqlService } from '../../Services/mock-sql.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings implements OnInit {
  themeService = inject(ThemeService);
  private mockDb = inject(MockSqlService);
  currentUser: any = null;

  // Preferences State
  emailNotifications = true;
  performanceAlerts = true;

  // Student
  showTimer = true;
  autoSubmitWarning = true;

  // Teacher
  defaultDifficulty = 'medium';
  defaultPositiveMarks = 1;

  // Accessibility
  fontSize = 16;
  reduceMotion = false;

  ngOnInit() {
    this.mockDb.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  setTheme(theme: 'dark' | 'light') {
    this.themeService.setTheme(theme);
  }

  updateFontSize(size: number) {
    this.fontSize = size;
    document.documentElement.style.fontSize = `${size}px`;
    // Note: This is a simplistic implementation. Real app might use rems derived from this or specific class.
    // For now we just update state, assuming CSS might use rem based on root font-size.
    // Actually, typically browser default is 16px. Changing root font size scales rem units.
    // Let's safe guard purely affecting UI scaling.
  }

  clearLocalData() {
    if (confirm('Are you sure you want to clear all local application data? You will be logged out.')) {
      localStorage.clear();
      window.location.reload();
    }
  }

  toggleMotion() {
    this.reduceMotion = !this.reduceMotion;
    if (this.reduceMotion) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  }
}
