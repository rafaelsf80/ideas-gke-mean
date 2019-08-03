import { Component, OnInit, Input } from '@angular/core';
import { Iniciativa } from '../models/iniciativa.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IniciativasService } from '../iniciativas.service';

@Component({
  selector: 'app-ver-iniciativa',
  templateUrl: './ver-iniciativa.component.html',
  styleUrls: ['./ver-iniciativa.component.css']
})
export class VerIniciativaComponent implements OnInit {
 
  @Input() public contenido;

  iniciativa: Iniciativa
  errores: any[]

  constructor(public activeModal: NgbActiveModal, private iniciativaService: IniciativasService) {  
    console.log(this.contenido);
    this.errores = [] 
  }

  ngOnInit() {  
    this.errores = []
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
