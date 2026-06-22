import { finalize } from 'rxjs';

import { inject } from '@angular/core';

import { HttpInterceptorFn } from '@angular/common/http';

import { LoaderService } from '../services/loader.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loader = inject(LoaderService);

  const showLoader = req.headers.get('X-Show-Loader');

  if (showLoader === 'true') {
    loader.show();
  }

  return next(req).pipe(
    finalize(() => {
      if (showLoader === 'true') {
        loader.hide();
      }
    }),
  );
};
