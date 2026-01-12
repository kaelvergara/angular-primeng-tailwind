import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login-component').then((mod) => mod.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./features/signup/signup-component').then((mod) => mod.SignupComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/navigation/navigation-component').then(
        (mod) => mod.NavigationComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home-component').then((mod) => mod.HomeComponent),
      },
      {
        path: 'property-owner',
        loadComponent: () =>
          import('./features/property-owner/property-owner-component').then(
            (mod) => mod.PropertyOwnerComponent
          ),
      },
    ],
  },
];
