import { Route } from '@angular/router';
import { AuthGuard } from './auth.gaurd';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: async () =>
      (await import('./components/login/login.component')).LoginComponent,
    title: 'Login',
  },
  {
    path:"",
    canActivate: [AuthGuard],
    children:[
      {
        path: 'posts',
        loadChildren: async () => (await import('@nx-angular/posts')).PostsModule,
        title: 'Posts',
      }
    ]
  }
];
