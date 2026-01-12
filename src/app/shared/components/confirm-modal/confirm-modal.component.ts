import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfirmDialogOptions, ConfirmDialogService } from '@shared/services/confirm-dialog.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule],
  templateUrl: './confirm-modal.component.html',
})
export class ConfirmDialogComponent {
  visible = false;
  options?: ConfirmDialogOptions;

  constructor(private confirmService: ConfirmDialogService) {
    this.confirmService.options$.subscribe((opts) => {
      this.options = opts;
      this.visible = true;
    });
  }

  accept() {
    this.confirmService.accept();
    this.visible = false;
  }

  reject() {
    this.confirmService.reject();
    this.visible = false;
  }
}
