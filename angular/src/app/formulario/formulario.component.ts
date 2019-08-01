import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import { debounceTime } from 'rxjs/operators';
import { IniciativasService } from '../iniciativas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup
  errores: any[]

  constructor(public activeModal: NgbActiveModal, private iniciativasService: IniciativasService, private router: Router
    ) { 
    this.formulario = new FormGroup( {
      fecha: new FormControl(''),
      titulo: new FormControl('', [ 
        Validators.required,
        Validators.minLength(3)
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),
      logo: new FormControl(''),
      adjuntos: new FormControl('', [
        Validators.required,
      ]),
      estado: new FormControl(''),
      tags: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),
    })
    this.errores = []
  }

  ngOnInit() {

   
    //const modalRef = this.modalService.open(this);
    //modalRef.componentInstance.title = 'About';
    let tituloControl = this.formulario.controls.titulo;
    tituloControl.valueChanges.pipe(debounceTime(400)).subscribe(value => {
      console.log(value)
    })
  }

  async crearIniciativa() {
    this.formulario.value.fecha = new Date();
    this.formulario.value.logo = 'https://whatever';
    this.formulario.value.estado = 'pendiente'

    console.log(this.formulario.value);
    
    try {
      let response = await this.iniciativasService.create(this.formulario.value);
      this.activeModal.close(this.formulario.value);
    } catch (err) {
      this.errores = err.error;
      console.log(err.error)
    }
  }
}
