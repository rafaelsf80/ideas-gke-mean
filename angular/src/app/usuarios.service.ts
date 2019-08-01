import { Injectable } from '@angular/core';
import { USUARIOS } from './data/usuarios.db'


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  getAll(): any[] { // síncrono
    return USUARIOS;
  }

  getAllP(): Promise<any[]> {  // asíncrono
    // let prom = new Promise((resolve, reject) => {
    //   resolve(ESCRITORES)
    // })
    // return prom
    return Promise.resolve(USUARIOS)
  }

  getById(id): any {
    // En vez de recorrer el array, uso la función find de JS
    let escritor = USUARIOS.find((item) => {
      return item.id == id;
    })
    return escritor
    // Abreviado: return ESCRITORES.find(item => item.id == id)
  }
}

