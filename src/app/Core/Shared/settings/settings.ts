import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../Services/theme.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  themeService = inject(ThemeService);

  setTheme(theme: 'dark' | 'light') {
    this.themeService.setTheme(theme);
  }
}
