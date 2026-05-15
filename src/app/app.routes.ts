import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';

export const routes: Routes = [
    /* Set Path */
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        loadComponent: () =>
            import('./layout/auth-layout/auth-layout.component')
            .then(m => m.AuthLayoutComponent),

        children: [
            {
            path: '',
            loadChildren: () =>
                import('./features/auth/auth.routes')
                .then(m => m.AUTH_ROUTES)
            }
        ]
    }
    /* End Path */
];
