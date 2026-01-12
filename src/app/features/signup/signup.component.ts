import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { SignupFormComponent, SignupFormType } from './components/signup-form/signup-form.component';

@Component({
  selector: 'app-signup-component',
  imports: [ButtonModule, DialogModule, SignupFormComponent, DividerModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @ViewChild(SignupFormComponent) signupForm!: SignupFormComponent;

  visible: boolean = false;
  SignupFormType = SignupFormType;
  formType!: SignupFormType;

  showDialog(type: SignupFormType) {
    this.formType = type;
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }

  resetForm() {
    this.signupForm.resetForm();
  }

  generateTitle(): string {
    return this.formType === SignupFormType.GUEST ? 'Signup As Guest' : 'Signup as Property Owner';
  }
}
