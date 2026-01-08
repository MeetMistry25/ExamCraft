import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MockSqlService } from '../../Services/mock-sql.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  private fb = inject(FormBuilder);
  private mockDb = inject(MockSqlService);

  currentUser: any = null;
  message: string = '';
  messageType: 'success' | 'error' = 'success';
  isPasswordSectionOpen = false;

  profileForm = this.fb.group({
    fullName: ['', Validators.required],
    email: [{ value: '', disabled: true }, [Validators.required, Validators.email]], // Email cannot be changed
    role: [{ value: '', disabled: true }],

    // Teacher specific
    designation: [''],
    experience: [''],
    education: [''],

    // Student specific
    enrollmentNo: [''],
    branch: [''],
    semester: ['']
  });

  passwordForm = this.fb.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, { validators: this.passwordMatchValidator });

  ngOnInit() {
    this.mockDb.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (user) {
        this.profileForm.patchValue({
          fullName: user.fullName,
          email: user.email,
          role: user.role,
          // Patch all potential fields, they will be ignored if undefined in user obj or form
          designation: user.designation,
          experience: user.experience,
          education: user.education,
          enrollmentNo: user.enrollmentNo,
          branch: user.branch,
          semester: user.semester
        });
      }
    });
  }

  passwordMatchValidator(control: AbstractControl) {
    const newPass = control.get('newPassword');
    const confirmPass = control.get('confirmPassword');
    return newPass && confirmPass && newPass.value !== confirmPass.value ? { mismatch: true } : null;
  }

  changePassword() {
    if (this.passwordForm.valid && this.currentUser) {
      const { currentPassword, newPassword } = this.passwordForm.value;

      if (currentPassword !== this.currentUser.password) {
        this.showMessage('Incorrect current password.', 'error');
        return;
      }

      const updates = {
        id: this.currentUser.id,
        password: newPassword
      };

      if (this.mockDb.updateUser(updates)) {
        this.showMessage('Password changed successfully!', 'success');
        this.passwordForm.reset();
      } else {
        this.showMessage('Failed to change password.', 'error');
      }
    }
  }

  showMessage(msg: string, type: 'success' | 'error') {
    this.message = msg;
    this.messageType = type;
    setTimeout(() => this.message = '', 3000);
  }

  togglePasswordSection() {
    this.isPasswordSectionOpen = !this.isPasswordSectionOpen;
  }

  // Edit Mode Logic
  isEditing = false;

  startEditing() {
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
    // Reset form to current user values
    if (this.currentUser) {
      this.profileForm.patchValue({
        fullName: this.currentUser.fullName,
        email: this.currentUser.email,
        role: this.currentUser.role,
        designation: this.currentUser.designation,
        experience: this.currentUser.experience,
        education: this.currentUser.education,
        enrollmentNo: this.currentUser.enrollmentNo,
        branch: this.currentUser.branch,
        semester: this.currentUser.semester
      });
    }
  }

  updateProfile() {
    if (this.profileForm.valid && this.currentUser) {
      const updates = {
        id: this.currentUser.id,
        ...this.profileForm.getRawValue()
      };

      if (this.mockDb.updateUser(updates)) {
        this.showMessage('Profile updated successfully!', 'success');
        this.isEditing = false; // Exit edit mode on success
      } else {
        this.showMessage('Failed to update profile.', 'error');
      }
    }
  }
}
