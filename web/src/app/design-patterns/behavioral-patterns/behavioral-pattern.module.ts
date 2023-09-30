import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { BehavioralPatternRoutingModule } from './behavioral-pattern-routing.module';
import { ChainOfResponsibilityComponent } from './chain-of-responsibility/chain-of-responsibility.component';

@NgModule({
  declarations: [
    ChainOfResponsibilityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    BehavioralPatternRoutingModule
  ],
})
export class BehavioralPatternModule {}
