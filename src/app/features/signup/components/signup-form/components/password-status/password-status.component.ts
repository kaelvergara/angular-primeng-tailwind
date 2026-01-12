import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-password-status-component',
  imports: [CommonModule],
  templateUrl: './password-status.component.html',
  styleUrl: './password-status.component.css',
})
export class PasswordStatusComponent implements OnInit {
  @Input() passwordControl!: AbstractControl | null;

  hasMinLength = false;
  hasUpperCase = false;
  hasTwoLowerCase = false;
  hasNumber = false;
  hasSpecialChar = false;

  ngOnInit(): void {
    this.passwordControl!.valueChanges.subscribe((password: string) => {
      this.validatePasswordRules(password || '');
    });
  }

  private validatePasswordRules(password: string) {
    this.hasMinLength = password.length >= 8;
    this.hasUpperCase = /[A-Z]/.test(password);
    this.hasTwoLowerCase = (password.match(/[a-z]/g) || []).length >= 2;
    this.hasNumber = /\d/.test(password);
    this.hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  }
}
