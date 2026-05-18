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

    //   {
    //     path: '',
    //     redirectTo: 'create',
    //     pathMatch: 'full'
    //   },
        {
        path: '',

        loadComponent: () =>
            import('./pages/leads-redirect/leads-redirect.component')
            .then(m => m.LeadsRedirectComponent)
        },

      {
        path: 'create',

        loadComponent: () =>
          import('./pages/leads-create/leads-create.component')
            .then(m => m.LeadsCreateComponent),
        data: {
          breadcrumb: 'Create'
        }
      },

      {
        path: ':id/detail',

        loadComponent: () =>
          import('./pages/leads-detail/leads-detail.component')
            .then(m => m.LeadsDetailComponent),
        data: {
          breadcrumb: 'Detail'
        }
      },

      {
        path: ':id/edit',

        loadComponent: () =>
          import('./pages/leads-edit/leads-edit.component')
            .then(m => m.LeadsEditComponent),
        data: {
          breadcrumb: 'Edit'
        }
      }

    ]
  }
];