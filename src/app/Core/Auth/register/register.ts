import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MockSqlService } from '../../Services/mock-sql.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private fb = inject(FormBuilder);

  private mockDb = inject(MockSqlService);
  private router = inject(Router);

  registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['student', Validators.required] // Default role
  });

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Registration attempt:', this.registerForm.value);
      const success = this.mockDb.saveUser(this.registerForm.value);

      if (success) {
        alert('Account created successfully! Redirecting to login...');
        this.router.navigate(['/login']);
      } else {
        alert('Email already exists. Please use a different email.');
      }
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  setRole(role: string) {
    this.registerForm.patchValue({ role });
  }
}
