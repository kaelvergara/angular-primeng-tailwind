import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/login/login-component').then((mod) => mod.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () => import('./features/signup/signup.component').then((mod) => mod.SignupComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/navigation/navigation.component').then((mod) => mod.NavigationComponent),
    children: [
      {
        path: 'property-directory',
        loadComponent: () =>
          import('./features/property-directory/property-directory.component').then(
            (mod) => mod.PropertyDirectoryComponent,
          ),
      },
      {
        path: 'property-owner',
        loadComponent: () =>
          import('./features/property-owner/property-owner-component').then((mod) => mod.PropertyOwnerComponent),
      },
    ],
  },
];
