import { Injectable } from '@angular/core';
import { Iniciativa } from './models/iniciativa.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IniciativasService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/iniciativas";
  }

  // GET http://localhost:3000/api/iniciativas
  getAll(): Promise<Iniciativa[]> {
    return this.http.get<Iniciativa[]>(this.baseUrl).toPromise()
  } 


   // PUT http://localhost:3000/api/iniciativas
   create(values): Promise<Iniciativa> {
     return this.http.post<Iniciativa>(this.baseUrl, values).toPromise();
   }

  // getAllP(): Promise<any[]> {  // asíncrono
  //   // let prom = new Promise((resolve, reject) => {
  //   //   resolve(ESCRITORES)
  //   // })
  //   // return prom
  //   return Promise.resolve(INICIATIVAS)
  // }

  // getById(id): any {
  //   // En vez de recorrer el array, uso la función find de JS
  //   let escritor = INICIATIVAS.find((item) => {
  //     return item.id == id;
  //   })
  //   return escritor
  //   // Abreviado: return ESCRITORES.find(item => item.id == id)
  // }




  // DELETE http://localhost:3000/api/iniciativas
  delete(iniciativa): Promise<Iniciativa> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
      body: {
        iniciativaId: iniciativa._id
      }
    }
    return this.http.delete<Iniciativa>(this.baseUrl, httpOptions).toPromise();
  }

  // PUT http://localhost:3000/api/iniciativas
  update(iniciativaId, values): Promise<Iniciativa> {
    values.iniciativaId = iniciativaId;
    return this.http.put<Iniciativa>(this.baseUrl, values).toPromise();
  }

  // GET http://localhost:3000/api/iniciativas
  getById(iniciativaId): Promise<Iniciativa> {
    return this.http.get<Iniciativa>(this.baseUrl + '/' + iniciativaId).toPromise();
  }
}
