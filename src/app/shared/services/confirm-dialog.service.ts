import { Injectable } from '@angular/core';

export enum ConfirmDialogType {
  CONFIRM = 'CONFIRM',
  REJECT = 'REJECT',
}
export interface ConfirmDialogDisplayOptions {
  header?: string;
  message?: string;
  acceptLabel?: string;
  rejectLabel?: string;
}
export interface ConfirmDialogOptions extends ConfirmDialogDisplayOptions {
  type: ConfirmDialogType;
}
export type ConfirmResult = boolean;
export interface RejectResult {
  proceed: boolean;
  remarks?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  options?: ConfirmDialogOptions;
  defaultConfirmOptions: ConfirmDialogOptions = {
    type: ConfirmDialogType.CONFIRM,
    header: 'Confirmation',
    message: 'Are you sure you want to approve the application?',
    acceptLabel: 'Yes',
    rejectLabel: 'No',
  };
  defaultRejectOptions: ConfirmDialogOptions = {
    type: ConfirmDialogType.REJECT,
    header: 'Reject Application',
    message: '',
    acceptLabel: 'Reject',
    rejectLabel: 'Cancel',
  };
  visible = false;

  confirm(options?: ConfirmDialogDisplayOptions): Promise<boolean> {
    this.options = { ...this.defaultConfirmOptions, ...options };
    this.visible = true;

    return new Promise<boolean>((resolve) => {
      const resolveFn = resolve;

      this.doAccept = () => {
        this.visible = false;
        resolveFn(true);
      };
      this.doReject = () => {
        this.visible = false;
        resolveFn(false);
      };
    });
  }

  reject(options?: ConfirmDialogDisplayOptions): Promise<RejectResult> {
    this.options = { ...this.defaultRejectOptions, ...options };
    this.visible = true;

    return new Promise<RejectResult>((resolve) => {
      const resolveFn = resolve;

      this.doAccept = (remarks?: string) => {
        this.visible = false;
        resolveFn({ proceed: true, remarks });
      };
      this.doReject = () => {
        this.visible = false;
        resolveFn({ proceed: false });
      };
    });
  }

  doAccept(remarks?: string) {}
  doReject() {}
}
