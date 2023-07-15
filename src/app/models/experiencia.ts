export class Experiencia {

    id?:number;

    puesto: String;
    empresa: String;
    inicio:String;
    fin: String;
    fotourl: String;

    constructor(puesto: String,
                empresa: String,
                inicio:String,
                fin: String,
                fotourl: String
                ){
                  
                    this.puesto= puesto;
                    this.empresa= empresa;
                    this.inicio= inicio;
                    this.fin= fin;
                    this.fotourl= fotourl;

    }
}

