export interface PaginatedResponse<T> {
  data: T[];
  pageIndex: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
