import { Injectable } from '@angular/core';
import { Usuario } from './models/usuario.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private http: HttpClient, public afAuth: AngularFireAuth) {
    this.baseUrl = "http://35.205.118.92:3000/api/usuarios";
    this.baseUrl = "http://localhost:3000/api/usuarios";
    this.baseUrl = "http://details-service:3000/api/usuarios";
    this.baseUrl = "http://"+environment.baseUrl+":3000/api/usuarios";
  }

  // GET http://localhost:3000/api/iniciativas
  getAll(): Promise<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl).toPromise()
  } 

  getCurrentUser(){
    return localStorage.getItem('currentUser');

    // return new Promise<any>((resolve, reject) => {
    //   var user = firebase.auth().onAuthStateChanged(function(user){
    //     if (user) {
    //       resolve(user);
    //     } else {
    //       reject('No user logged in');
    //     }
    //   })
    // })
  }

  updateCurrentUser(value){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }


}

