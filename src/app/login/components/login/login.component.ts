import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { BackendConnectService } from '../../../core/backend-connect.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']//,
  //providers: [BackendConnectService]
})
export class LoginComponent {

  loginForm : FormGroup;
  isInit:boolean = true;

  constructor(fb: FormBuilder, private backendConnectService: BackendConnectService){
    this.loginForm = fb.group({
      'userName' : [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],     
    })
  }  

  submitLogin(value: any):void{
    this.backendConnectService.postRequest(value).subscribe( authVal => {
      console.log(authVal);
      if (authVal.success === true) {
        sessionStorage.setItem('app-token', authVal.token);
      } else {
        console.log('not valid user');
      }
    });
  }
}
