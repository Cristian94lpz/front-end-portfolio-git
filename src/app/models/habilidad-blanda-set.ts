export class HabilidadBlandaSet {
   

        id?:number;
    
        trabajo_equipo: String;
        pensamiento_critico: String;
        comunicacion_asertiva:String;
        escucha_activa: String;
        adaptacion_cambio: String;
        creatividad: String;
        respeto_opiniones: String;
    
        constructor(trabajo_equipo: String,
            pensamiento_critico: String,
            comunicacion_asertiva:String,
            escucha_activa: String,
            adaptacion_cambio: String,
            creatividad: String,
            respeto_opiniones: String
    
    ){
            this.trabajo_equipo = trabajo_equipo;
            this.pensamiento_critico =pensamiento_critico;
            this.comunicacion_asertiva =comunicacion_asertiva;
            this.escucha_activa =escucha_activa;
            this.adaptacion_cambio =adaptacion_cambio;
            this.creatividad =creatividad;
            this.respeto_opiniones = respeto_opiniones;
    
    }
    
    public set s_trabajo_equipo(value:String){
        this.trabajo_equipo = value;
    }
    public set s_pensamiento_critico(value:String){
        this.pensamiento_critico = value;
    }
    public set s_comunicacion_asertiva(value:String){
        this.comunicacion_asertiva = value;
    }
    public set s_escucha_activa(value:String){
        this.escucha_activa = value;
    }
    public set s_adaptacion_cambio(value:String){
        this.adaptacion_cambio = value;
    }
    public set s_creatividad(value:String){
        this.creatividad = value;
    }
    public set s_respeto_opiniones(value:String){
        this.respeto_opiniones = value;
    }
       
    
}
