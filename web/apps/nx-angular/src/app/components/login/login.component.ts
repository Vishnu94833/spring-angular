import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './core/model/user.model';
import { LoginService } from './core/services/login.service';

@Component({
  selector: 'nx-angular-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent implements OnInit {
  // readonly user = signal<User>({ Email: '', Password: '' });
  readonly auth = inject(LoginService);
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
        'Email': new FormControl('', Validators.required),
        'Password': new FormControl('', Validators.required)
    });
}

  // /**
  //  * @param  {User} user
  //  */
  // onLogin(user: User) {
  //   this.auth.login(user);
  //   // const userData = this.auth.getPassByReference(user);
  // }

    
  onSubmit() { 
    const user:User = this.loginForm.value
    this.auth.login(user);
}
}
