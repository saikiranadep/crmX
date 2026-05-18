import { Routes } from '@angular/router';

export const LEADS_ROUTES: Routes = [
  {
    path: '',

    loadComponent: () =>
      import('./pages/leads-shell/leads-shell.component')
        .then(m => m.LeadsShellComponent),

    data: {
      breadcrumb: 'Leads'
    },

    children: [

      /*
      |--------------------------------------------------------------------------
      | DEFAULT REDIRECT
      |--------------------------------------------------------------------------
      */

      {
        path: '',
        pathMatch: 'full',

        loadComponent: () =>
          import('./pages/leads-redirect/leads-redirect.component')
            .then(m => m.LeadsRedirectComponent)
      },

      /*
      |--------------------------------------------------------------------------
      | CREATE LEAD
      |--------------------------------------------------------------------------
      */

      {
        path: 'create',

        loadComponent: () =>
          import('./pages/leads-form/leads-form.component')
            .then(m => m.LeadsFormComponent),

        data: {
          breadcrumb: 'Create'
        }
      },

      /*
      |--------------------------------------------------------------------------
      | LEAD DETAIL
      |--------------------------------------------------------------------------
      */

      {
        path: ':id/detail',

        loadComponent: () =>
          import('./pages/leads-detail/leads-detail.component')
            .then(m => m.LeadsDetailComponent),

        data: {
          breadcrumb: 'Detail'
        }
      },

      /*
      |--------------------------------------------------------------------------
      | EDIT LEAD
      |--------------------------------------------------------------------------
      */

      {
        path: ':id/edit',

        loadComponent: () =>
          import('./pages/leads-form/leads-form.component')
            .then(m => m.LeadsFormComponent),

        data: {
          breadcrumb: 'Edit'
        }
      }

    ]
  }
];