import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormErrorComponent } from '@shared/components/form-error/form-error.component';
import { ConfirmDialogService } from '@shared/services/confirm-dialog.service';
import { mobileNumberValidator } from '@shared/validators/mobile-number.validator';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-view-property-directory.component',
  imports: [ReactiveFormsModule, FormErrorComponent, InputTextModule, DividerModule, ButtonModule],
  templateUrl: './view-property-directory.component.html',
  styleUrl: './view-property-directory.component.css',
})
export class ViewPropertyDirectoryComponent {
  propertyId!: string;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private confirmService: ConfirmDialogService,
  ) {
    this.form = this.fb.group({
      firstName: ['John', Validators.required],
      middleName: ['Michael', Validators.required],
      lastName: ['Doe', Validators.required],
      gender: ['Male', Validators.required],
      mobileNumber: ['1234', [Validators.required, mobileNumberValidator()]],
      email: ['a@b.c', [Validators.required, Validators.email]],
      propertyName: ['Orient Square', Validators.required],
      barangay: ['san antonio', Validators.required],
      completeAddress: ['123', Validators.required],
    });

    this.form.disable();
  }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.paramMap.get('id')!;
  }

  async deleteItem() {
    const confirmed = await this.confirmService.confirm({
      message: 'Are you sure you want to delete this item?',
      header: 'Delete Confirmation',
      acceptLabel: 'Yes, delete',
      rejectLabel: 'Cancel',
    });

    if (confirmed) {
      console.log('Item deleted!');
    } else {
      console.log('Deletion cancelled');
    }
  }

  async openReviewModal() {
    const confirmed = await this.confirmService.confirm({
      message: 'Are you sure you want to delete this item?',
      header: 'Delete Confirmation',
      acceptLabel: 'Yes, delete',
      rejectLabel: 'Cancel',
    });

    if (confirmed) {
      console.log('Item deleted!');
    } else {
      console.log('Deletion cancelled');
    }
  }
}
