import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'posts',
    loadChildren: async () => (await import('@nx-angular/posts')).PostsModule,
  },
];
