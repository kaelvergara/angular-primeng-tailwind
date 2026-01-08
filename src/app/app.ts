import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, DatePickerModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('macea');
}
