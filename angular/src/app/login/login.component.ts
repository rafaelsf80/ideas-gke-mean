import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbActiveModal,  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  errores: any[]

  constructor(public activeModal: NgbActiveModal, public authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup( {
      email: new FormControl('', [ 
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    })
    this.errores = []
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryTwitterLogin(){
    this.authService.doTwitterLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      this.router.navigate(['/']);
      this.activeModal.close(res.user.email);
    }, err => {
      console.log("Failed login: " + err);
      this.errores = err.error;
    })
  }

  async cerrar() {
    try {
      this.activeModal.close("ok");
    } catch (err) {
      this.errores = err.error;
      console.log(err.error)
    }
  }
}