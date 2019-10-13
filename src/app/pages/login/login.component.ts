import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formData = {
    username: '',
    passowrd: ''
  };
  constructor(private auth: AuthService) {}
  login = () => {
    this.auth
      .login(this.formData)
      .then(() => {
        console.log('finished logging in');
      })
      .catch(err => {
        console.log(err);
      });
  };
}
