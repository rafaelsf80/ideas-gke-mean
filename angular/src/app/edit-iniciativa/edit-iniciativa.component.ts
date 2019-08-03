import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Iniciativa } from '../models/iniciativa.model';
import { IniciativasService } from '../iniciativas.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-iniciativa',
  templateUrl: './edit-iniciativa.component.html',
  styleUrls: ['./edit-iniciativa.component.css']
})

export class EditIniciativaComponent implements OnInit {

  @Input() public contenido;

  iniciativa: Iniciativa

  aprobado: boolean
  identificador: string
  errores: any[]
  formulario: FormGroup

  constructor(public activeModal: NgbActiveModal, private activatedRoute: ActivatedRoute, private router: Router, private iniciativaService: IniciativasService) {  
    console.log(this.contenido);
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
    this.formulario.controls['titulo'].setValue(this.contenido.titulo);
    this.formulario.controls['descripcion'].setValue(this.contenido.descripcion);
    this.formulario.controls['adjuntos'].setValue(this.contenido.adjuntos);
    this.formulario.controls['tags'].setValue(this.contenido.tags);
    if (this.contenido.estado === 'pendiente')
      this.formulario.controls['estado'].setValue(false);
    else 
      this.formulario.controls['estado'].setValue(true);

    // this.activatedRoute.params.subscribe(params => {
    //   console.log(params.identificador);
    //   this.identificador = params.identificador
    //   if (params.identificador.estado === 'aprobado')
    //     this.aprobado = true
    //   else
    //     this.aprobado = false
    //   this.iniciativaService.getById(params.identificador).then(response => {
    //     console.log(response)
    //     this.iniciativa = response;
    //   })
    // })
    this.errores = []
  }

  async modificarIniciativa(values) {
    if (values.estado)
      values.estado = 'aprobado'  
    else
      values.estado = 'pendiente'
    values._id = this.contenido._id;
    values.fecha = this.contenido.fecha;
    try {
      let response = await this.iniciativaService.update(this.contenido._id, values).then(response => {
        console.log(response);
        this.activeModal.close(values);
      })
    } catch (err) {
      this.errores = err.error;
      console.log(err.error)
    }
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
