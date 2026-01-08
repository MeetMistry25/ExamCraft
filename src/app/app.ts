import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './Core/Shared/navbar/navbar';
import { Footer } from './Core/Shared/footer/footer';
import { Sidebar } from './Core/Shared/sidebar/sidebar';
import { MockSqlService } from './Core/Services/mock-sql.service';
import { LayoutService } from './Core/Services/layout.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, Sidebar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('ExamCraft');

  private mockDb = inject(MockSqlService);
  public layoutService = inject(LayoutService);
  currentUser: any = null;

  ngOnInit() {
    this.mockDb.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
}
