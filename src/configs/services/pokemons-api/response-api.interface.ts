export interface Pagination {
  limit: number;
  count: number;
  totalPages: number;
}

export interface ErrorResponse {
  status: number;
  message: string;
  details?: unknown;
}

export interface ResponseAPI<T> {
  ok: boolean;
  message: string;
  pagination?: Pagination;
  data?: T;
  errors?: ErrorResponse;
}
