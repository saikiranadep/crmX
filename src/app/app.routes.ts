import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [

  /*
  |--------------------------------------------------------------------------
  | AUTH LAYOUT
  |--------------------------------------------------------------------------
  */

  {
    path: '',

    loadComponent: () =>
      import('./layout/auth-layout/auth-layout.component')
        .then(m => m.AuthLayoutComponent),

    children: [

      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },

      {
        path: '',
        loadChildren: () =>
          import('./features/auth/auth.routes')
            .then(m => m.AUTH_ROUTES)
      }

    ]
  },

  /*
  |--------------------------------------------------------------------------
  | MAIN APPLICATION
  |--------------------------------------------------------------------------
  */

  {
    path: 'app',

    canActivate: [authGuard],

    loadComponent: () =>
      import('./layout/main-layout/main-layout.component')
        .then(m => m.MainLayoutComponent),

    children: [
      {
        path: 'home',

        loadChildren: () =>
          import('./features/home/home.routes')
            .then(m => m.HOME_ROUTES),
      },
      {
        path: 'dashboard',

        loadChildren: () =>
          import('./features/dashboard/dashboard.routes')
            .then(m => m.DASHBOARD_ROUTES),
      },
      {
        path: 'leads',
        loadChildren: () =>
          import('./features/leads/leads.routes')
          .then(m => m.LEADS_ROUTES)
      }
    ]
  },

  /*
  |--------------------------------------------------------------------------
  | FALLBACK
  |--------------------------------------------------------------------------
  */

  {
    path: '**',
    redirectTo: 'login'
  }

];