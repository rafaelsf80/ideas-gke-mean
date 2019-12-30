import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { AuthService } from '../auth.service';

import { Usuario } from '../models/usuario.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  // Needed to call modal from this component
  @ViewChild(LoginComponent, {static: false}) loginContent: NgbActiveModal;

  loggedIn: boolean;
  userLabel: Usuario;
  app: AppComponent;

  constructor(private modalService: NgbModal, private router: Router, private authService: AuthService) { 
    this.userLabel = new Usuario();
    this.loggedIn = false;
  }

  // Manually subscribe to method to update any new login 
  ngOnInit() {
      this.authService.itemValue.subscribe((name)  => {
        this.userLabel.nombre = name;
        if (this.userLabel.nombre != null)
          this.loggedIn = true;
        else
          this.loggedIn = false;
      })
  }

  login() {
    const modalRef = this.modalService.open(LoginComponent);
    console.log("login");
    // In case I need to pass some parameters
    //modalRef.componentInstance.contenido = 'contenido';
    //modalRef.componentInstance.title = 'About loginModal';

    // Wait to close the modal and update the main page
    modalRef.result.then((result) => {
       if (result) {
       this.goToPage('/');
       }
     });
  }

  logout() {
    this.authService.doLogout();
    this.goToPage('/');
  }
  // ngOnInit() {
    // this.usuariosService.getCurrentUser()
    // .then(res => {
    //   if(res.providerData[0].providerId == 'password'){
    //     this.currentUser.image = 'https://via.placeholder.com/400x300';
    //     this.currentUser.nombre = res.displayName;
    //     this.currentUser.provider = res.providerData[0].providerId;
    //     console.log("navbar: " + this.currentUser)
    //     // return resolve(this.currentUser);
    //   }
    //   else{
    //     this.currentUser.image = res.photoURL;
    //     this.currentUser.nombre = res.displayName;
    //     this.currentUser.provider = res.providerData[0].providerId;
    //     // return resolve(this.currentUser);
    //   }
    // }, err => {
    //   this.router.navigate(['/']);
    //   console.log("paso por err");
    //   // return reject(err);
    // })
  // } 



  goToPage(ruta) {
    console.log(ruta)
    this.router.navigate([ruta])
  }


}




// constructor(private currentUserService: CurrentUserService) {
//      currentUserService.itemValue.subscribe(currentUser => {
//      this.currentUser = JSON.parse(currentUser);
//     });
// }