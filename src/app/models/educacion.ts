export class Educacion {

    id?:number;
   
    nombre_curso:String;
    descripcion_curso:String;
    modulo1:String;
    modulo2:String;
    modulo3:String;
    modulo4:String;
    modulo5:String;
    modulo6:String;
    modulo7:String;
    modulo8:String;
    modulo9:String;
    modulo10:String;
    modulo11:String;
    modulo12:String;
    foto_curso:String;
    nombre_instituto_curso:String;

    constructor(
        nombre_curso:String,
        descripcion_curso:String,
        modulo1:String,
        modulo2:String,
        modulo3:String,
        modulo4:String,
        modulo5:String,
        modulo6:String,
        modulo7:String,
        modulo8:String,
        modulo9:String,
        modulo10:String,
        modulo11:String,
        modulo12:String,
        foto_curso:String,
        nombre_instituto_curso:String){
            this.nombre_curso = nombre_curso;
            this.descripcion_curso = descripcion_curso;
            this.modulo1 = modulo1;
            this.modulo2 = modulo2;
            this.modulo3 = modulo3;
            this.modulo4 = modulo4;
            this.modulo5 = modulo5;
            this.modulo6 = modulo6;
            this.modulo7 = modulo7;
            this.modulo8 = modulo8;
            this.modulo9 = modulo9;
            this.modulo10 = modulo10;
            this.modulo11 = modulo11;
            this.modulo12 = modulo12;
            this.foto_curso = foto_curso;
            this.nombre_instituto_curso = nombre_instituto_curso;
        }

}
