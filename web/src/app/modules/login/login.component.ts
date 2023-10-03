import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string = '';
  password: string = '';

  constructor(private authService:AuthService) {}

  ngOnInit(): void {}

  onLogin(userName: string, password: string) {
    this.authService.login(new User(userName, password))
  }
}
