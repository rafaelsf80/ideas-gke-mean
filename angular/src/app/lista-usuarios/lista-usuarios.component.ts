import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  arrUsuarios: any []
  
  constructor(private usuariosService: UsuariosService ) { 
  }

  async ngOnInit() {
    //this.arrEscritores = this.escritoresService.getAll()
    // this.escritoresService.getAllP().then((ESCRITORES) => {
    //   this.arrEscritores = ESCRITORES
    //})
    this.arrUsuarios = await this.usuariosService.getAllP()
  }

}
