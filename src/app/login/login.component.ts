import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../autenticacion.service';
import { AuthService } from '../auth.service';
import { LoginUsuario } from '../Models/login-usuario';
import { TokenService } from '../token.service';
import {NgForm} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles:string[] = [];
  errMsj:string;
  
  form:FormGroup;

  constructor(private formBuilder:FormBuilder,
              private tokenService:TokenService,
              private authService:AuthService,
              private router: Router,
              @Inject (MAT_DIALOG_DATA) public data: any) { 
              this.form=this.formBuilder.group(
      {
          email:['', [Validators.required, Validators.email]],
          password:['',[Validators.required, Validators.minLength(8)]],
          deviceInfo:this.formBuilder.group({
            devideId: ["17867868768"],
            deviceType: ["DEVICE_TYPE_ANDROID"],
            notificationToken:["67657575eececc34"]
          })
      }
    )
  }
  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      
    }
  }

  onLogin():void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password)
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        location.reload()
      },
      err => {
        this.isLogged = true;
        this.isLoginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj)
      }
    )
  }

  get Email()
  {return this.form.get('email');
}

get Password() {
  return this.form.get('password');
}


}
