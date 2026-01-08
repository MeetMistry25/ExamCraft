import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MockSqlService } from '../../Services/mock-sql.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);

  private mockDb = inject(MockSqlService);
  private router = inject(Router);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login attempt:', this.loginForm.value);
      const email = this.loginForm.value.email!;
      const password = this.loginForm.value.password!;

      const user = this.mockDb.validateUser(email, password);

      if (user) {
        alert(`Welcome back, ${user.fullName}!`);
        // Basic role-based redirection
        if (user.role === 'teacher') {
          this.router.navigate(['/teacher/dashboard']);
        } else {
          this.router.navigate(['/student/dashboard']);
        }
      } else {
        alert('Invalid email or password');
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
