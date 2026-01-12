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
        path: 'property-directory/:id',
        loadComponent: () =>
          import('./features/property-directory/components/view-property-directory/view-property-directory.component').then(
            (mod) => mod.ViewPropertyDirectoryComponent,
          ),
      },
    ],
  },
];
