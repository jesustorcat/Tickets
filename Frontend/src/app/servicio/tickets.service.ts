import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor( private HttpClient:HttpClient) { }

  agregarTickets(tickets: any){
    
    let TicketsJson = JSON.stringify(tickets);

    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Token ${localStorage.getItem('key')}`
    })

    return this.HttpClient.post('http://localhost:8000/api/tickets/crear/', TicketsJson, {headers: headers});

  }

  obtenerTickets(estado: string): Observable<any>{

    return this.HttpClient.get(`http://localhost:8000/api/tickets/${estado}/`, {
      headers: new HttpHeaders({
        'Authorization':`Token ${localStorage.getItem('key')}`
      })
    })
  }

  obtenerTodosLosTickets(): Observable<any>{

    return this.HttpClient.get('http://localhost:8000/api/tickets/lista/', {
      headers: new HttpHeaders({
        'Authorization':`Token ${localStorage.getItem('key')}`
      })
    })
  }

}
