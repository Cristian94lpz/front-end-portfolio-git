export class Proyecto {

    id?:number;

    nombre: String;
    descripcion: String;
    url:String;
    fotourl: String;
    

    constructor(nombre: String,
                descripcion: String,
                url:String,
                fotourl: String){
                    this.nombre = nombre;
                    this.descripcion = descripcion;
                    this.url= url;
                    this.fotourl= fotourl;

    }
}
