import { Route } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';

export const postsRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: PostsComponent}
];
