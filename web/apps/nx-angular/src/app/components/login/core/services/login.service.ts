import { Injectable, inject } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoginService {
  readonly http = inject(HttpClient);

  /**
   * hits auth api to get access token and set it in localStorage
   * @param  {User} user
   * @returns void
   */
  login(authRequest: User): void {
    console.log(authRequest);
    this.http
      .post('./auth/token', authRequest)
      // .pipe(
      //   tap((res) => {
      //     console.log("res", res);
      //   })
      // )
      .subscribe((res:any) => {
        localStorage.setItem('token', res.accessToken)
        console.log('res', res);
      });
  }

  getPassByReference(res: User) {
    res.Email = 'vishnukuppan@test.com';
    return res;
  }
}
