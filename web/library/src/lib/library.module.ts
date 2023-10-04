import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { libraryRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(libraryRoutes)],
})
export class LibraryModule {}
