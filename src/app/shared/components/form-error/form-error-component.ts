import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-form-error',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './form-error-component.html',
    styleUrl: './form-error-component.css',
})
export class FormErrorComponent {
    @Input() control!: AbstractControl | null;
    @Input() label = 'This field';
}
