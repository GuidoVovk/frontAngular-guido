export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    imgPerfil: string;
    puesto: string;
    descripcionPuesto: string;

    constructor (nombre:string, apellido:string, imgPerfil:string, puesto:string, descripcionPuesto:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.imgPerfil = imgPerfil;
        this.puesto = puesto;
        this.descripcionPuesto = descripcionPuesto;
    }
}