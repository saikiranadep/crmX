import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  if(isLoggedIn === 'true'){
      return true;
  }
    // Redirect to Login page
    router.navigate(['/login']) 
    return false;

};
