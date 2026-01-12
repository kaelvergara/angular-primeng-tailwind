// confirm-dialog.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface ConfirmDialogOptions {
  header?: string;
  message: string;
  acceptLabel?: string;
  rejectLabel?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  private confirmSubject = new Subject<boolean>();
  private optionsSubject = new Subject<ConfirmDialogOptions>();

  get options$(): Observable<ConfirmDialogOptions> {
    return this.optionsSubject.asObservable();
  }

  get confirm$(): Observable<boolean> {
    return this.confirmSubject.asObservable();
  }

  confirm(options: ConfirmDialogOptions): Promise<boolean> {
    this.optionsSubject.next({
      header: options.header || 'Confirm',
      acceptLabel: options.acceptLabel || 'Yes',
      rejectLabel: options.rejectLabel || 'No',
      message: options.message,
    });

    return new Promise((resolve) => {
      const subscription = this.confirm$.subscribe((result) => {
        resolve(result);
        subscription.unsubscribe();
      });
    });
  }

  accept() {
    this.confirmSubject.next(true);
  }

  reject() {
    this.confirmSubject.next(false);
  }
}
