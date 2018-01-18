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
    console.log('Reactive Form Data: ')
    console.log(value);
     // Variable to hold a reference of addComment/updateComment
        //let commentOperation:Observable<Comment[]>;
    this.backendConnectService.postRequest(value)
      .subscribe(hero => {
        //this.heroes.push(hero);
        console.log(hero);
      });
  }
}
