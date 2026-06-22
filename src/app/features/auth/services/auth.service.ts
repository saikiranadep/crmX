import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpService } from '../../../core/api/http.service';

import { API_ENDPOINTS } from '../../../core/api/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpService);

  login(payload: any) {
    return this.http.post(
      API_ENDPOINTS.AUTH.LOGIN,

      payload,
      true,
    );
  }

  logout(): Observable <any> {
    return this.http.post(
      API_ENDPOINTS.AUTH.LOGOUT,

      {},
    );
  }
}
