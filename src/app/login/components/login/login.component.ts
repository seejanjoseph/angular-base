import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendConnectService } from '../../../core/backend-connect.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  isInit: boolean = true;

  constructor(
    fb: FormBuilder,
    private backendConnectService: BackendConnectService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      'userName': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    })
  }

  submitLogin(value: any): void {
    this.backendConnectService.post('login', value).subscribe(authVal => {
      console.log(authVal);
      if (authVal.success === true) {
        console.log('in');
        sessionStorage.setItem('app-token', authVal.token);
        if (authVal.role === 'user') {
          this.router.navigate(['/user']);
        } else {
          this.router.navigate(['/admin']);
        }
      } else {
        console.log('not valid user');
      }
    });
  }
}
