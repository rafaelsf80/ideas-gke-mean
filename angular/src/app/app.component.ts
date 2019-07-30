import { Component } from '@angular/core';
import {NgbModal  } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './formulario/formulario.component';
import { IniciativasService } from './iniciativas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrIniciativas: any []

  constructor(private modalService: NgbModal, private iniciativasService: IniciativasService) {}

  async ngOnInit() {
    this.arrIniciativas = await this.iniciativasService.getAllP()
  }

  open() {
    //const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(FormularioComponent);
    modalRef.componentInstance.title = 'About';
  }
}