import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignPatternComponent } from './design-pattern.component';

const routes: Routes = [
  {
    path: '',
    component: DesignPatternComponent,
  },
  {
    path: 'creational-pattern',
    loadChildren: () =>
      import('./creational-patterns/creational-pattern.module').then(
        (m) => m.CreationalPatternModule
      ),
  },
  {
    path: 'structural-pattern',
    loadChildren: () =>
      import('./structural-patterns/structural-pattern.module').then(
        (m) => m.StructuralPatternModule
      ),
  },
  {
    path: 'behavioral-pattern',
    loadChildren: () =>
      import('./behavioral-patterns/behavioral-pattern.module').then(
        (m) => m.BehavioralPatternModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignPatternRoutingModule {}
