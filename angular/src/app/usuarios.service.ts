import { Injectable } from '@angular/core';
import { Usuario } from './models/usuario.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://35.205.118.92:3000/api/usuarios";
  }

  // GET http://localhost:3000/api/iniciativas
  getAll(): Promise<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl).toPromise()
  } 
}

