export class Ticket {
    id!: String;
    dni!: String;
    precioReal: number = 0;
    tipoEspectador!: String;
    fechaCobro!: Date;
    precioCobrado: number = 0;


     ticket (id:String,dni:String,precioReal:number,tipoEspectador: String, fechaCobro:Date, precioCobrado:number) {
        this.id = id;
        this.dni = dni;
        this.precioReal = precioReal;
        this.tipoEspectador = tipoEspectador;
        this.fechaCobro = fechaCobro;
        this.precioCobrado = precioCobrado;
    }
}