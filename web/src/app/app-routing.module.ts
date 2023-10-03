// import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginComponent } from './modules/login/login.component';
import { FallbackComponent } from './components/fallback/fallback.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //default route
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/posts/posts.module').then((m) => m.PostsModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'design-patterns',
    loadChildren: () =>
      import('./design-patterns/design-pattern.module').then(
        (m) => m.DesignPatternModule
      ),
  },
  {
    path: '**',
    component: FallbackComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
