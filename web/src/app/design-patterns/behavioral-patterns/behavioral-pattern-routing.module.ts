import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChainOfResponsibilityComponent } from './chain-of-responsibility/chain-of-responsibility.component';

const routes: Routes = [
  {
    path: 'chain-of-responsibility',
    component: ChainOfResponsibilityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BehavioralPatternRoutingModule {}
