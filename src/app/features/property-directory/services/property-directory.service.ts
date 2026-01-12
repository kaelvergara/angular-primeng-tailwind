import { Injectable } from '@angular/core';
import { PaginatedResponse } from '@shared/models/paginated-response.model';
import { Observable, of } from 'rxjs';
import { PropertyDirectory } from '../models/property-directory.model';

@Injectable({
  providedIn: 'root',
})
export class PropertyDirectoryService {
  private readonly ALL_APPLICANTS: PropertyDirectory[] = this.generateApplicants(200);

  getPropertyDirectories(pageIndex = 0, itemsPerPage = 10): Observable<PaginatedResponse<PropertyDirectory>> {
    const start = pageIndex * itemsPerPage;
    const end = start + itemsPerPage;
    const pagedData = this.ALL_APPLICANTS.slice(start, end);

    return of({
      data: pagedData,
      pageIndex,
      itemsPerPage,
      totalItems: this.ALL_APPLICANTS.length,
      totalPages: Math.ceil(this.ALL_APPLICANTS.length / itemsPerPage),
    });
  }

  private generateApplicants(count: number): PropertyDirectory[] {
    return Array.from({ length: count }, (_, i) => ({
      registeredDate: new Date(Date.now() - i * 86400000),
      applicantName: `Applicant ${i + 1}`,
      applicantType: i % 2 === 0 ? 'GUEST' : 'PROPERTY_OWNER',
      email: `applicant${i + 1}@example.com`,
      mobileNumber: `09${Math.floor(100000000 + Math.random() * 900000000)}`,
      status: ['NEW', 'DENIED', 'APPROVED'][i % 3] as any,
    }));
  }
}
