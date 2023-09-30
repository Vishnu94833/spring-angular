import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';
import { BuilderComponent } from './builder/builder.component';
import { CreationalPatternRoutingModule } from './creational-pattern-routing.module';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { SingletonComponent } from './singleton/singleton.component';

@NgModule({
  declarations: [
    AbstractFactoryComponent,
    BuilderComponent,
    FactoryMethodComponent,
    PrototypeComponent,
    SingletonComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    CreationalPatternRoutingModule,
  ],
})
export class CreationalPatternModule {}
