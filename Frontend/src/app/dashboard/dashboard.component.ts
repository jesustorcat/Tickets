import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../servicio/tickets.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private TicketsService:TicketsService) { }

  TicketsAbiertos: any;
  TicketsPendientes: any;
  TicketsEnProceso: any;
  TicketsResueltos: any;
  TicketsCerrados: any;
  TodosLosTickets: any;

  cambiarEstado(estado: string) {
    
    switch(estado){
      case 'AB':{
        return 'Abierto';
      }
      case 'PE':{
        return 'Pendiente';
      }
      case 'EP':{
        return 'En Proceso';
      }
      case 'RE':{
        return 'Resuelto';
      }
      case 'CE':{
        return 'Cerrado';
      }
      default: {
        return ''
      }
    }
  }

  obtenerAbiertos(){
    let abierto: string = 'AB'
    this.TicketsService.obtenerTickets(abierto).subscribe(
      resultado => {
        this.TicketsAbiertos = resultado;
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }

  obtenerPendientes(){
    let pendiente: string = 'PE'
    this.TicketsService.obtenerTickets(pendiente).subscribe(
      resultado => {
        this.TicketsPendientes = resultado;
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }

  obtenerEnProceso(){
    let enProceso: string = 'EP'
    this.TicketsService.obtenerTickets(enProceso).subscribe(
      resultado => {
        this.TicketsEnProceso = resultado;
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }

  obtenerResueltos(){
    let resuelto: string = 'RE'
    this.TicketsService.obtenerTickets(resuelto).subscribe(
      resultado => {
        this.TicketsResueltos = resultado;
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }

  obtenerCerrados(){
    let cerrados: string = 'CE'
    this.TicketsService.obtenerTickets(cerrados).subscribe(
      resultado => {
        this.TicketsCerrados = resultado;
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }

  obtenerTodos(){
    this.TicketsService.obtenerTodosLosTickets().subscribe(
      resultado => {
        this.TodosLosTickets = resultado;
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }

  ngOnInit() {

    this.obtenerAbiertos();
    this.obtenerPendientes();
    this.obtenerEnProceso();
    this.obtenerResueltos();
    this.obtenerCerrados();
    this.obtenerTodos();
    
  }

}
