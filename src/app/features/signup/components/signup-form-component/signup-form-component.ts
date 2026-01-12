import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorComponent } from '@shared/components/form-error/form-error-component';
import { mobileNumberValidator } from '@shared/validators/mobile-number-validator';
import { confirmPasswordValidator, passwordValidator } from '@shared/validators/password-validator';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { StepperModule } from 'primeng/stepper';
import { PasswordStatusComponent } from './components/password-status/password-status-component';

export enum SignupFormType {
  GUEST = 'GUEST',
  PROPERTY_OWNER = 'PROPERTY_OWNER',
}

@Component({
  selector: 'app-signup-form-component',
  imports: [
    ButtonModule,
    InputTextModule,
    StepperModule,
    ReactiveFormsModule,
    FileUploadModule,
    CommonModule,
    FormErrorComponent,
    PasswordStatusComponent,
  ],
  templateUrl: './signup-form-component.html',
  styleUrl: './signup-form-component.css',
})
export class SignupFormComponent implements OnInit {
  @Output() hideDialog = new EventEmitter<void>();
  public SignupFormType = SignupFormType;
  public FormControl = FormControl;
  private activateCallback!: (stepIndex: number) => void;
  form: FormGroup;
  formIndex: number = 1;

  private _type!: SignupFormType;
  @Input()
  set type(type: SignupFormType) {
    this._type = type;
    if (type === SignupFormType.PROPERTY_OWNER) {
      this.form.addControl('propertyName', this.fb.control('', { validators: [Validators.required] }));
      this.form.addControl('area', this.fb.control('', { validators: [Validators.required] }));
      this.form.addControl('street', this.fb.control('', { validators: [Validators.required] }));
      this.form.addControl('barangay', this.fb.control('', { validators: [Validators.required] }));
      this.form.addControl('houseNo', this.fb.control('', { validators: [Validators.required] }));
    } else {
      this.form.removeControl('propertyName');
      this.form.removeControl('area');
      this.form.removeControl('street');
      this.form.removeControl('barangay');
      this.form.removeControl('houseNo');
    }
  }
  get type(): SignupFormType {
    return this._type;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        firstName: ['', Validators.required],
        middleName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        mobileNumber: ['', [Validators.required, mobileNumberValidator()]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, passwordValidator()]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: confirmPasswordValidator },
    );
  }

  ngOnInit(): void {
    console.log('init', this.type);
  }

  nextStep(activateCallback: (count: number) => void) {
    activateCallback(2);
  }

  // HACK
  storeCallback(callback: (stepIndex: number) => void): boolean {
    this.activateCallback = callback;
    return true;
  }

  resetForm() {
    this.form.reset();
    this.formIndex = 1;
  }

  submit() {
    // TOOD delete mock
    this.setStep1HardcodedValues();

    if (this.formIndex === 1 && this.isGeneralInformationValid()) {
      this.formIndex++;
      this.activateCallback(this.formIndex);

      // TODO delete mock
      this.setStep2HardcodedValues();
    } else if (this.formIndex === 2 && this.isCreatePasswordStepValid()) {
      this.formIndex++;
      this.activateCallback(this.formIndex);
    } else if (this.formIndex === 3 && this.type === SignupFormType.PROPERTY_OWNER) {
      this.form.markAllAsTouched();
    } else {
      this.form.markAllAsTouched();
    }
  }

  goBack() {
    if (this.formIndex > 1) {
      this.formIndex--;
      this.activateCallback(this.formIndex);
    }
  }

  isGeneralInformationValid() {
    return (
      this.form.get('firstName')?.valid &&
      this.form.get('middleName')?.valid &&
      this.form.get('lastName')?.valid &&
      this.form.get('gender')?.valid &&
      this.form.get('mobileNumber')?.valid &&
      this.form.get('email')?.valid
    );
  }

  isCreatePasswordStepValid() {
    return this.form.get('password')?.valid && this.form.errors?.['passwordMismatch'] === undefined;
  }

  setStep1HardcodedValues() {
    this.form.patchValue({
      firstName: 'John',
      middleName: 'M.',
      lastName: 'Doe',
      gender: 'Male',
      mobileNumber: '09123456789',
      email: 'john.doe@example.com',
    });

    
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  
  setStep2HardcodedValues() {
    this.form.patchValue({
      password: 'Password123!',
      confirmPassword: 'Password123!',
    });

    this.form.markAsPristine();
    this.form.markAsUntouched();
  }
}
