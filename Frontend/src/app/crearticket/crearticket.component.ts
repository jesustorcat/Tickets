import { Component, OnInit, DoCheck } from '@angular/core';
import { TicketsService } from '../servicio/tickets.service';

@Component({
  selector: 'app-crearticket',
  templateUrl: './crearticket.component.html',
  styleUrls: ['./crearticket.component.css']
})
export class CrearticketComponent implements OnInit, DoCheck {
  
  constructor(private TicketsService:TicketsService) { }

  ticket: any;
  buffEstado: string;

  ngOnInit() {
  
    // Variables para agregar Ticket.
    this.ticket =  {
      Titulo: '',
      Descripcion: '',
      Estado: '',
    }
  }


  agregarTicket(){
    this.cambiarValorSelect(this.buffEstado)
    console.log('Elemento agregado');
    this.TicketsService.agregarTickets(this.ticket).subscribe(
      resultado => {
        console.log('Agregado exitosamente')
      },
      error => {
        console.log(JSON.stringify(error))
        console.log(this.ticket)
      }
    );
  }

  cambiarValorSelect(valor: string){
    
    switch(valor){
      case 'Abierto':{
        this.ticket.Estado = 'AB';
      }
      case 'Pendiente':{
        this.ticket.Estado = 'PE';
      }
      case 'En Proceso':{
        this.ticket.Estado = 'EP';
      }
      case 'Resuelto':{
        this.ticket.Estado = 'RE';
      }
      case 'Cerrado':{
        this.ticket.Estado = 'CE';
      }
      default: {
        return ''
      }
    }
  }

  ngDoCheck(): void {
  }

}
