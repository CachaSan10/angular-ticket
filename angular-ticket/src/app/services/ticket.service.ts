import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { get } from 'http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  tickets: Array<Ticket>;
  constructor() {
    this.tickets = new Array<Ticket>();
   }

   getTickets(): Array<Ticket>{
    return this.tickets;
   }

   addTicket(ticket: Ticket){
    ticket.id = this.getIdDisponible();
    this.tickets.push(ticket);
   }

   getIdDisponible(){
    var maxid: number;
    maxid = 0;
    for ( var i = 0; i < this.tickets.length;i++){
    if(maxid < Number(this.tickets[i].id)){
    maxid = Number(this.tickets[i].id);
    }
    };
    return String((maxid + 1));
    }
    
    getTicket(id: String): Ticket{
      let ticket:Ticket = new Ticket();
    let indexTicket:number = this.tickets.findIndex(t => (t.id == id));
    ticket = this.tickets[indexTicket];
    return ticket;

    }

    updateTicket(ticket: Ticket){
      let indexTicket:number = this.tickets.findIndex(t => (t.id == ticket.id));
    this.tickets[indexTicket]=ticket;
    }

    deleteTicket(ticket: Ticket){
      let indexTicket:number = this.tickets.findIndex(t => (t.id == ticket.id));
      this.tickets.splice(indexTicket,1);
    }

}
