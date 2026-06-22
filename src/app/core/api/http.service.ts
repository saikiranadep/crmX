import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly http = inject(HttpClient);

  get<T>(url: string) {
    return this.http.get<T>(url);
  }

  post<T>(url: string, body: unknown, showLoader = false) {
    return this.http.post<T>(url, body, {
      headers: {
        'X-Show-Loader': String(showLoader),
      },
    });
  }

  put<T>(url: string, body: unknown) {
    return this.http.put<T>(url, body);
  }

  delete<T>(url: string) {
    return this.http.delete<T>(url);
  }
}
