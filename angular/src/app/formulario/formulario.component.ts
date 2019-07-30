import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup

  constructor() { 
    this.formulario = new FormGroup( {
      titulo: new FormControl('', [ 
        Validators.required,
        Validators.minLength(3)
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),
      adjuntos: new FormControl('', [
        Validators.required,
      ]),
      tags: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),
    })
  }

  ngOnInit() {
    let tituloControl = this.formulario.controls.titulo;
    tituloControl.valueChanges.pipe(debounceTime(400)).subscribe(value => {
      console.log(value)
    })
  }

  crearPersona() {
    console.log(this.formulario.value);
  }
}
