import { Component } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { IniciativasService } from './iniciativas.service';
import { Router } from '@angular/router';
import { NgbModal  } from '@ng-bootstrap/ng-bootstrap';
import { EditIniciativaComponent } from './edit-iniciativa/edit-iniciativa.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrIniciativas: any []
  errores: any[]

  constructor(private modalService: NgbModal, private router: Router, private iniciativasService: IniciativasService) {}

  async ngOnInit() {
    this.errores = []
    this.recuperarIniciativas();
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

  editarIniciativaModal(iniciativa) {
    const modalRef = this.modalService.open(EditIniciativaComponent);
    // In case I need to pass some parameters
    modalRef.componentInstance.contenido = iniciativa;
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
    modalRef.componentInstance.title = 'About';
    // Wait to close the modal and update the main page
    modalRef.result.then((result) => {
      if (result) {
      console.log(result);
      this.recuperarIniciativas();
      }
    });
    
    // try {
    //   let response = await this.iniciativasService.create(this.formulario.value);
    //   this.router.navigate(['/formulario']);
    // } catch (err) {
    //   this.errores = err.error;
    //   console.log(err.error)
    // }
    //console.log( response )
  }
}