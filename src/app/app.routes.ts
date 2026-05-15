import { Routes } from '@angular/router';
// import { LoginComponent } from './features/auth/pages/login/login.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    /* Set Path */
    
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
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./features/dashboard/dashboard.routes')
            .then(m => m.DASHBOARD_ROUTES),
            
        canActivate: [authGuard]
    }
    /* End Path */
];
