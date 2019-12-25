import { Component, ViewChild } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { IniciativasService } from './iniciativas.service';
import { Router } from '@angular/router';
import { NgbModal  } from '@ng-bootstrap/ng-bootstrap';
import { EditIniciativaComponent } from './edit-iniciativa/edit-iniciativa.component';
import { VerIniciativaComponent } from './ver-iniciativa/ver-iniciativa.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //@ViewChild('childModal', {static: false}) public activeModal: NgbModal;


  arrIniciativas: any []
  errores: any[]

  constructor(public modalService: NgbModal, private router: Router, private iniciativasService: IniciativasService) {}

  async ngOnInit() {
    this.errores = []
    this.recuperarIniciativas();
  }

  openLogin() {
    console.log("openlogin");
    //const modalRef = this.modalService.open(LoginComponent);

  }

  recuperarIniciativas() {
    this.iniciativasService.getAll().then(response => {
      this.arrIniciativas = response;      
    });
  }

  eliminarIniciativa(iniciativa) {
    this.iniciativasService.delete(iniciativa).then(response => {
      console.log(response);
      this.recuperarIniciativas();
    })
  }

  verIniciativaModal(iniciativa) {
    const modalRef = this.modalService.open(VerIniciativaComponent);
    // In case I need to pass some parameters
    modalRef.componentInstance.contenido = iniciativa;
    modalRef.componentInstance.title = 'About verIniciativaModal';

    // Wait to close the modal and update the main page
    modalRef.result.then((result) => {
      if (result) {
      console.log(result);
      this.recuperarIniciativas();
      }
    });
  }

  editarIniciativaModal(iniciativa) {
    const modalRef = this.modalService.open(EditIniciativaComponent);
    // In case I need to pass some parameters
    modalRef.componentInstance.contenido = iniciativa;
    modalRef.componentInstance.title = 'About editarIniciativaModal';

    // Wait to close the modal and update the main page
    modalRef.result.then((result) => {
      if (result) {
      console.log(result);
      this.recuperarIniciativas();
      }
    });
  }

  nuevaIniciativaModal() {  
    const modalRef = this.modalService.open(FormularioComponent);
    // In case I need to pass some parameters
    modalRef.componentInstance.title = 'About nuevaIniciativaModal';
    // Wait to close the modal and update the main page
    modalRef.result.then((result) => {
      if (result) {
      console.log(result);
      this.recuperarIniciativas();
      }
    });
  }
}