import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { StructuralPatternRoutingModule } from './structural-pattern-routing.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    StructuralPatternRoutingModule
  ],
})
export class StructuralPatternModule {}
