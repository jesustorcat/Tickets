import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private HttpClient:HttpClient) { }

  authLogin(datos: any){
    
    let datosJson = JSON.stringify(datos);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.HttpClient.post('http://localhost:8000/api/rest-auth/login/', datosJson, {headers: headers});
  }

  authRegister(datos: any){
    
    let datosJson = JSON.stringify(datos);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.HttpClient.post('http://localhost:8000/api/rest-auth/registration/', datosJson, {headers: headers});
  }
}
