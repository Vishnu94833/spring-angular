import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user';
class AuthResponse {
    email :string = "";
    accessToken:string=""
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(user: User) {
    this.http.post<AuthResponse>('./auth/token', user).subscribe((res)=>{
      console.log(res);
      localStorage.setItem("token",res.accessToken);
      this.router.navigate(['/design-patterns'])
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
