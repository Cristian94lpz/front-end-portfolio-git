export class Usuario {

    id?:number;
    nombre:String;
    password:String;

    constructor(nombre:String,password:String){
        this.nombre = nombre;
        this.password = password;
    }
}
