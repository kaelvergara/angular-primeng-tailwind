import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

import { PropertyDirectory } from './models/property-directory.model';
import { PropertyDirectoryService } from './services/property-directory.service';

@Component({
  selector: 'app-property-directory',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    DrawerModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    PaginatorModule,
  ],
  templateUrl: './property-directory.component.html',
  styleUrl: './property-directory.component.css',
})
export class PropertyDirectoryComponent {
  searchForm: FormGroup;
  propertyDirectories: PropertyDirectory[] = [];
  pageIndex: number = 0;
  itemsPerPage: number = 10;
  totalItems: number = 200;

  constructor(
    private propertyDirectoryService: PropertyDirectoryService,
    private fb: FormBuilder,
  ) {
    this.searchForm = this.fb.group({
      propertyName: [''],
      status: [''],
    });
  }

  ngOnInit() {
    this.getPropertyDirectories(0, 10);
  }

  getPropertyDirectories(index: number, rows: number) {
    this.propertyDirectoryService.getPropertyDirectories(index, rows).subscribe({
      next: (resp) => {
        this.propertyDirectories = resp.data;
        this.totalItems = resp.totalItems;
      },
      error: () => {},
    });
  }

  search() {
    console.log('search');
  }

  onPageChange(event: PaginatorState) {
    this.itemsPerPage = event.rows ?? 10;
    this.pageIndex = event.page ?? 0;
    this.getPropertyDirectories(this.pageIndex, this.itemsPerPage);
  }
}
