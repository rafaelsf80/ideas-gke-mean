import { Injectable } from '@angular/core';
import { INICIATIVAS } from './data/iniciativas.db'


@Injectable({
  providedIn: 'root'
})
export class IniciativasService {

  constructor() { }

  getAll(): any[] { // síncrono
    return INICIATIVAS;
  }

  getAllP(): Promise<any[]> {  // asíncrono
    // let prom = new Promise((resolve, reject) => {
    //   resolve(ESCRITORES)
    // })
    // return prom
    return Promise.resolve(INICIATIVAS)
  }

  getById(id): any {
    // En vez de recorrer el array, uso la función find de JS
    let escritor = INICIATIVAS.find((item) => {
      return item.id == id;
    })
    return escritor
    // Abreviado: return ESCRITORES.find(item => item.id == id)
  }
}
