import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { catchError, of } from 'rxjs';
import { map } from 'rxjs/operators';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//   const loginService = inject(LoginService);
  const router = inject(Router);

  

  return !!localStorage.getItem('token')
}