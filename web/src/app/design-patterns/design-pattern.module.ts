import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

import { DesignPatternRoutingModule } from './design-pattern-routing.module';
import { DesignPatternComponent } from './design-pattern.component';

@NgModule({
  declarations: [DesignPatternComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    DesignPatternRoutingModule,
  ],
})
export class DesignPatternModule {}
