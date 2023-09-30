import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';
import { BuilderComponent } from './builder/builder.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { SingletonComponent } from './singleton/singleton.component';

const routes: Routes = [
  { path: 'builder', component: BuilderComponent },
  { path: 'abstract-factory', component: AbstractFactoryComponent },
  { path: 'factory-method', component: FactoryMethodComponent },
  { path: 'prototype', component: PrototypeComponent },
  { path: 'singleton', component: SingletonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationalPatternRoutingModule {}
