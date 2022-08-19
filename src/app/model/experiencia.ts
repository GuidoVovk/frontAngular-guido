export class Experiencia {
    id? : number;
    nombreE : string;
    nombreEmpresa: string;
    fechaE: string;
    descripcionE : string;

    constructor(nombreE: string, nombreEmpresa: string, fechaE: string, descripcionE: string){
        this.nombreE = nombreE;
        this.nombreEmpresa = nombreEmpresa;
        this.fechaE = fechaE;
        this.descripcionE = descripcionE;
    }
}
