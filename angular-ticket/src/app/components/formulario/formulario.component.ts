import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  ticket: Ticket;
  accion: String="new";
  estado: boolean=false;

  constructor(private ticketService:TicketService, private router:Router,private activatedRoute: ActivatedRoute) {
  this.ticket=new Ticket(); 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == '0'){
      this.accion = "new";
      }else{
      this.accion = "update";
      this.cargarTicket(params['id']);
      }
      });
      
  }

  cargarTicket(id: string){
    this.ticket = this.ticketService.getTicket(id);

  }

  registrarTicket(){
    this.ticket.fechaCobro= new Date();
    this.ticket.precioCobrado=this.calcularPrecioEspectador();
    this.ticketService.addTicket(this.ticket);
    this.estado=false;
    this.router.navigate(["tabla"]);
  }


  volverMenuPricipal(){
    this.router.navigate(["tabla"]);

  }
 
  calcularPrecioEspectador(){
   
    if(this.ticket.tipoEspectador==="Local"){
      return this.ticket.precioReal-this.ticket.precioReal*0.2;
    }else
      return this.ticket.precioReal;
  
  }

  mostrarPrecioCobrado(){
    var bandera = this.ticket.tipoEspectador==="Local" || this.ticket.tipoEspectador==="Extranjero";
    if( bandera && this.ticket.precioReal>0)
    this.estado=true;

  }
 

  modificarTicket(){
    this.ticket.fechaCobro= new Date();
    this.ticket.precioCobrado=this.calcularPrecioEspectador();
    this.ticketService.updateTicket(this.ticket)
    this.estado=false;
    this.router.navigate(["tabla"]);
  }
 
}
