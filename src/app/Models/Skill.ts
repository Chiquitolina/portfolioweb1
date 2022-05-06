export class Skill{
    id?:any;
    nombre:string;
    color:string;
    porcentaje: number;

    constructor(nombre:string, color:string) {
        this.nombre = nombre;
        this.color = color;
    }
}

