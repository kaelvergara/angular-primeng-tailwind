import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmDialogOptions, ConfirmDialogService, ConfirmDialogType } from '@shared/services/confirm-dialog.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { FormErrorComponent } from '../form-error/form-error.component';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DialogModule, ButtonModule, TextareaModule, FormErrorComponent],
  templateUrl: './confirm-modal.component.html',
})
export class ConfirmDialogComponent {
  public ConfirmDialogType = ConfirmDialogType;
  visible = false;
  options?: ConfirmDialogOptions;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    protected confirmService: ConfirmDialogService,
  ) {
    this.form = this.fb.group({
      remarks: ['', Validators.required],
    });
  }

  rejectWithRemarks() {
    if (this.form.valid) {
      const remarks = this.form.value.remarks;
      this.confirmService.doAccept(remarks);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
