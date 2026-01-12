import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function mobileNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // Allow empty value (required should be separate validator)
    if (!value) return null;

    // If contains non-digit characters
    if (!/^\d+$/.test(value)) {
      return {
        mbHasStrings: true,
      };
    }

    // Length and prefix rules
    if (value.length === 11 && !value.startsWith('09')) {
      return {
        mbInvalidFormat: true,
      };
    } else if (value.length === 12 && !value.startsWith('639')) {
      return {
        mbInvalidFormat: true,
      };
    } else if (value.length !== 11 && value.length !== 12) {
      return {
        mbInvalidFormat: true,
      };
    }

    // Valid
    return null;
  };
}
