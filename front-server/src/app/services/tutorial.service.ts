import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://127.0.0.1:8080/api/persons';

@Injectable({
  providedIn: 'root'
})

export class TutorialService {

  constructor(private http: HttpClient) { }


  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${baseUrl}`);
  }


  enviarDatosUsuario(userData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' }
      )
    };
    // Aquí convertimos el objeto userData a formato JSON antes de enviarlo al backend
    return this.http.post<any>(`${baseUrl}/register`, JSON.stringify(userData), httpOptions);
  }


  enviarLoginUsuario(userData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' }
      )
    };
    // Aquí convertimos el objeto userData a formato JSON antes de enviarlo al backend
    return this.http.post<any>(`${baseUrl}/login`, JSON.stringify(userData), httpOptions);
  }



  agregarUsuario(userData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' }
      )
    };
    // Aquí convertimos el objeto userData a formato JSON antes de enviarlo al backend
    return this.http.post<any>(`${baseUrl}/new`, JSON.stringify(userData), httpOptions);
  }



}