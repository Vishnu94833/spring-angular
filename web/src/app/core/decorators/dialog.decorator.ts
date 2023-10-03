import { Inject, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export function MatDialogDecorator(dialogConfig: any = {}) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    debugger
    descriptor.value = function (...args: any[]) {
      const dialogRef = dialogConfig.dialog.open(dialogConfig.component, {
        ...dialogConfig,
        data: dialogConfig.data || {},
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        // You can handle the result of the dialog here
      });

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
