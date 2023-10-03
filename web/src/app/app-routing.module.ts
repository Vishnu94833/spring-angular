// import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'design-patterns',
    loadChildren: () =>
      import('./design-patterns/design-pattern.module').then(
        (m) => m.DesignPatternModule
      ),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
