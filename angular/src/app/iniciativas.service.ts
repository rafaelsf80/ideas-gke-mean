import { Injectable } from '@angular/core';
import { Iniciativa } from './models/iniciativa.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IniciativasService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://35.205.118.92:3000/api/iniciativas";
    this.baseUrl = "http://localhost:3000/api/iniciativas";
    this.baseUrl = "http://details:3000/api/iniciativas";
  }

  // GET http://localhost:3000/api/iniciativas
  getAll(): Promise<Iniciativa[]> {
    return this.http.get<Iniciativa[]>(this.baseUrl).toPromise()
  } 

  // PUT http://localhost:3000/api/iniciativas
  create(values): Promise<Iniciativa> {
    return this.http.post<Iniciativa>(this.baseUrl, values).toPromise();
  }

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
