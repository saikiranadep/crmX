import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';

import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401:
          localStorage.clear();

          break;

        case 403:
          console.error('Access denied');

          break;

        case 500:
          console.error('Server error');

          break;
      }

      return throwError(() => error);
    }),
  );
};
