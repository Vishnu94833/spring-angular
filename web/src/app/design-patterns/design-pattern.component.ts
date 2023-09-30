import { Component, OnInit } from '@angular/core';
import { DesignPatterns } from './design-pattern-model';

@Component({
  selector: 'design-patterns',
  template: `
    <div fxLayout="row">
      <div fxLayout="column" fxFlex="5"></div>
      <div
        fxLayout="column"
        fxFlex="30"
        fxLayoutAlign="center center"
        *ngFor="let pattern of vm.patterns"
      >
        <h1 fxFlex="10">
          <pre>{{ pattern.patternType }}</pre>
        </h1>
        <mat-list role="list" fxFlex>
          <mat-list-item
            role="listitem"
            *ngFor="let subPattern of pattern.patterns"
            ><a [routerLink]="subPattern.routePath">{{
              subPattern.routeView
            }}</a></mat-list-item
          >
        </mat-list>
      </div>
      <div fxLayout="column" fxFlex="5"></div>
    </div>
  `,
})
export class DesignPatternComponent implements OnInit {
  vm: DesignPatterns = new DesignPatterns();

  constructor() {}

  ngOnInit(): void {}
}
