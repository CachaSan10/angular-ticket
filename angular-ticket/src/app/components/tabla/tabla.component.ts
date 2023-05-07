import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

 
  tickets: Array<Ticket>;
  resumen: boolean = false;

  constructor(private ticketService: TicketService, private router: Router) {
    this.tickets = new Array<Ticket>();
    this.cargarTickets();
   }

  ngOnInit(): void {
  }

  cargarTickets(){
     this.tickets =  this.ticketService.getTickets();
  }


  agregarTicket(){
    this.router.navigate(["formulario-ticket",'0'])
  }

  modificarTicket(ticket: Ticket){
    this.router.navigate(["formulario-ticket",ticket.id])

  }

  eliminarTicket(ticket: Ticket){
      this.ticketService.deleteTicket(ticket);
    
  }

  resumenTicket(){
    this.resumen=true;
  }

  sumarTicketsLocal(){
    let Total=0;
      this.tickets.forEach((ticket)=>{
        if(ticket.tipoEspectador=="Local"){
          Total+=ticket.precioCobrado;
        }
      });
      return Total;
  }

  sumarTicketsExtranjero(){
    let Total=0;
    this.tickets.forEach((ticket)=>{
      if(ticket.tipoEspectador=="Extranjero"){
        Total+=ticket.precioCobrado;
      }
    });
    return Total;
  }

}
