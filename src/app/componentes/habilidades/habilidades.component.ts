import { Component, OnInit } from '@angular/core';
import { HabilidadBlanda } from 'src/app/models/habilidad-blanda';
import { HabilidadBlandaSet } from 'src/app/models/habilidad-blanda-set';
import { HabilidadDura } from 'src/app/models/habilidad-dura';
import { HabilidadDuraSet } from 'src/app/models/habilidad-dura-set';
import { HabilidadBlandaService } from 'src/app/servicios/habilidad-blanda.service';
import { HabilidadDuraService } from 'src/app/servicios/habilidad-dura.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  
  habilidadesDuras: HabilidadDura = new HabilidadDura('','','','','','','','','','','','','');
  boolDuras : HabilidadDura = new HabilidadDura('','','','','','','','','','','','','');
  boolDurasSet : HabilidadDuraSet = new HabilidadDuraSet( '','','','','','','','','','','','','');
  habilidadesBlandas: HabilidadBlanda = new HabilidadBlanda('','','','','','','');
  boolBlandas : HabilidadBlanda = new HabilidadBlanda('','','','','','','');
  boolBlandasSet : HabilidadBlandaSet = new HabilidadBlandaSet('','','','','','','');
  

  constructor(private habDuraService:HabilidadDuraService, private habBlandaService:HabilidadBlandaService,private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargaDatosHabDuras(1);
    this.cargaDatosHabDuras(2);
    this.cargaDatosHabBlanda(1);
    this.cargaDatosHabBlanda(2);
    
  }

  //Datos habilidades Duras
  cargaDatosHabDuras(id:number):void{
    if(id == 1){
    this.habDuraService.datosHabDura(id).subscribe(
      data =>{ 
        this.habilidadesDuras = data;
      }
      ,
      err =>{
        console.log(err.error);
      }
    )
    }
    if(id == 2){
      this.habDuraService.datosHabDura(id).subscribe(
        data =>{ 
          this.boolDuras = data;
          this.boolDurasSet.s_angular=this.boolDuras.angular;
          this.boolDurasSet.s_visual_studio=this.boolDuras.visual_studio;
          this.boolDurasSet.s_consola_npm=this.boolDuras.consola_npm;
          this.boolDurasSet.s_mysql=this.boolDuras.mysql;
          this.boolDurasSet.s_sql0=this.boolDuras.sql0;
          this.boolDurasSet.s_php=this.boolDuras.php;
          this.boolDurasSet.s_phpmyadmin=this.boolDuras.phpmyadmin;
          this.boolDurasSet.s_html=this.boolDuras.html;
          this.boolDurasSet.s_css=this.boolDuras.css;
          this.boolDurasSet.s_javascript=this.boolDuras.javascript;
          this.boolDurasSet.s_typescript=this.boolDuras.typescript;
          this.boolDurasSet.s_git=this.boolDuras.git;
          this.boolDurasSet.s_adobe_photoshop=this.boolDuras.adobe_photoshop;
          

          
        }
        ,
        err =>{
          console.log(err.error);
        }
      )
      }
  }
  //Datos habilidades Blandas
  cargaDatosHabBlanda(id:number):void{
    if(id == 1){
    this.habBlandaService.datosHabBlanda(id).subscribe(
      data =>{ 
        this.habilidadesBlandas = data;
      }
      ,
      err =>{
        console.log(err.error);
      }
    )
    }
    if(id == 2){
      this.habBlandaService.datosHabBlanda(id).subscribe(
        data =>{ 
          this.boolBlandas = data;
          this.boolBlandasSet.s_trabajo_equipo = this.boolBlandas.trabajo_equipo;
          this.boolBlandasSet.s_pensamiento_critico = this.boolBlandas.pensamiento_critico;
          this.boolBlandasSet.s_comunicacion_asertiva = this.boolBlandas.comunicacion_asertiva;
          this.boolBlandasSet.s_escucha_activa = this.boolBlandas.escucha_activa;
          this.boolBlandasSet.s_adaptacion_cambio = this.boolBlandas.adaptacion_cambio;
          this.boolBlandasSet.s_creatividad = this.boolBlandas.creatividad;
          this.boolBlandasSet.s_respeto_opiniones= this.boolBlandas.respeto_opiniones;
        }
        ,
        err =>{
          console.log(err.error);
        }
      )
      }
  }

  //Vista ventana
  estado:boolean=false;
 

  desactivar():void{
   this.estado=false;
  }

  activar():void{
    this.estado=true;
  }

  //Mostrar habilidades Blandas
  

  verBlanda(i:number):void{
    if(i == 1){
      this.boolBlandasSet.s_trabajo_equipo='true';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
    if(i == 2){
      this.boolBlandasSet.s_pensamiento_critico='true';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
    if(i == 3){
      this.boolBlandasSet.s_comunicacion_asertiva='true';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
    if(i == 4){
      this.boolBlandasSet.s_escucha_activa='true';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
    if(i == 5){
      this.boolBlandasSet.s_adaptacion_cambio='true';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
    if(i == 6){
      this.boolBlandasSet.s_creatividad='true';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
    if(i ==7){
      this.boolBlandasSet.s_respeto_opiniones='true';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
  }

  noverBlanda(i:number):void{
    if(i == 1){
      this.boolBlandasSet.s_trabajo_equipo='false';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
    if(i == 2){
      this.boolBlandasSet.s_pensamiento_critico='false';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
    if(i == 3){
      this.boolBlandasSet.s_comunicacion_asertiva='false';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
    if(i == 4){
      this.boolBlandasSet.s_escucha_activa='false';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
    if(i == 5){
      this.boolBlandasSet.s_adaptacion_cambio='false';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
    if(i == 6){
      this.boolBlandasSet.s_creatividad='false';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
    if(i == 7){
      this.boolBlandasSet.s_respeto_opiniones='false';
      this.boolBlandas = this.boolBlandasSet;
      this.habBlandaService.update(this.boolBlandas,2).subscribe(
        recargar => {
          this.cargaDatosHabBlanda(2);
        }
      )
    }
  }


  //Mostrar Habilidades Duras

  verDura(j:number):void{
      if(j == 1){
        this.boolDurasSet.s_angular='true';
        this.boolDuras = this.boolDurasSet;
        this.habDuraService.update(this.boolDuras,2).subscribe(
          recargar => {
            this.cargaDatosHabDuras(2);
          }
        )
      }
      if(j == 2){
        this.boolDurasSet.s_visual_studio='true';
        this.boolDuras = this.boolDurasSet;
        this.habDuraService.update(this.boolDuras,2).subscribe(
          recargar => {
            this.cargaDatosHabDuras(2);
          }
        )
      }
      if(j == 3){
        this.boolDurasSet.s_consola_npm='true';
        this.boolDuras = this.boolDurasSet;
        this.habDuraService.update(this.boolDuras,2).subscribe(
          recargar => {
            this.cargaDatosHabDuras(2);
          }
        )
      }
      if(j == 4){
        this.boolDurasSet.s_mysql='true';
        this.boolDuras = this.boolDurasSet;
        this.habDuraService.update(this.boolDuras,2).subscribe(
          recargar => {
            this.cargaDatosHabDuras(2);
          }
        )
      }
      if(j == 5){
        this.boolDurasSet.s_sql0='true';
        this.boolDuras = this.boolDurasSet;
        this.habDuraService.update(this.boolDuras,2).subscribe(
          recargar => {
            this.cargaDatosHabDuras(2);
          }
        )
      }
      if(j == 6){
        this.boolDurasSet.s_php='true';
        this.boolDuras = this.boolDurasSet;
        this.habDuraService.update(this.boolDuras,2).subscribe(
          recargar => {
            this.cargaDatosHabDuras(2);
          }
        )
      }
      if(j == 7){
        this.boolDurasSet.s_phpmyadmin='true';
        this.boolDuras = this.boolDurasSet;
        this.habDuraService.update(this.boolDuras,2).subscribe(
          recargar => {
            this.cargaDatosHabDuras(2);
          }
        )
      }
      if(j == 8){
        this.boolDurasSet.s_html='true';
        this.boolDuras = this.boolDurasSet;
        this.habDuraService.update(this.boolDuras,2).subscribe(
          recargar => {
            this.cargaDatosHabDuras(2);
          }
        )
      }
      if(j == 9){
        this.boolDurasSet.s_css='true';
        this.boolDuras = this.boolDurasSet;
        this.habDuraService.update(this.boolDuras,2).subscribe(
          recargar => {
            this.cargaDatosHabDuras(2);
          }
        )
      }
      if(j == 10){
        this.boolDurasSet.s_javascript='true';
        this.boolDuras = this.boolDurasSet;
        this.habDuraService.update(this.boolDuras,2).subscribe(
          recargar => {
            this.cargaDatosHabDuras(2);
          }
        )
      }
      if(j == 11){
        this.boolDurasSet.s_typescript='true';
        this.boolDuras = this.boolDurasSet;
        this.habDuraService.update(this.boolDuras,2).subscribe(
          recargar => {
            this.cargaDatosHabDuras(2);
          }
        )
      }
      if(j == 12){
        this.boolDurasSet.s_git='true';
        this.boolDuras = this.boolDurasSet;
        this.habDuraService.update(this.boolDuras,2).subscribe(
          recargar => {
            this.cargaDatosHabDuras(2);
          }
        )
      }
      if(j == 13){
        this.boolDurasSet.s_adobe_photoshop='true';
        this.boolDuras = this.boolDurasSet;
        this.habDuraService.update(this.boolDuras,2).subscribe(
          recargar => {
            this.cargaDatosHabDuras(2);
          }
        )
      }
  }
  

  noverDura(j:number):void{
    if(j == 1){
      this.boolDurasSet.s_angular='false';
      this.boolDuras = this.boolDurasSet;
      this.habDuraService.update(this.boolDuras,2).subscribe(
        recargar => {
          this.cargaDatosHabDuras(2);
        }
      )
    }
    if(j == 2){
      this.boolDurasSet.s_visual_studio='false';
      this.boolDuras = this.boolDurasSet;
      this.habDuraService.update(this.boolDuras,2).subscribe(
        recargar => {
          this.cargaDatosHabDuras(2);
        }
      )
    }
    if(j == 3){
      this.boolDurasSet.s_consola_npm='false';
      this.boolDuras = this.boolDurasSet;
      this.habDuraService.update(this.boolDuras,2).subscribe(
        recargar => {
          this.cargaDatosHabDuras(2);
        }
      )
    }
    if(j == 4){
      this.boolDurasSet.s_mysql='false';
      this.boolDuras = this.boolDurasSet;
      this.habDuraService.update(this.boolDuras,2).subscribe(
        recargar => {
          this.cargaDatosHabDuras(2);
        }
      )
    }
    if(j == 5){
      this.boolDurasSet.s_sql0='false';
      this.boolDuras = this.boolDurasSet;
      this.habDuraService.update(this.boolDuras,2).subscribe(
        recargar => {
          this.cargaDatosHabDuras(2);
        }
      )
    }
    if(j == 6){
      this.boolDurasSet.s_php='false';
      this.boolDuras = this.boolDurasSet;
      this.habDuraService.update(this.boolDuras,2).subscribe(
        recargar => {
          this.cargaDatosHabDuras(2);
        }
      )
    }
    if(j == 7){
      this.boolDurasSet.s_phpmyadmin='false';
      this.boolDuras = this.boolDurasSet;
      this.habDuraService.update(this.boolDuras,2).subscribe(
        recargar => {
          this.cargaDatosHabDuras(2);
        }
      )
    }
    if(j == 8){
      this.boolDurasSet.s_html='false';
      this.boolDuras = this.boolDurasSet;
      this.habDuraService.update(this.boolDuras,2).subscribe(
        recargar => {
          this.cargaDatosHabDuras(2);
        }
      )
    }
    if(j == 9){
      this.boolDurasSet.s_css='false';
      this.boolDuras = this.boolDurasSet;
      this.habDuraService.update(this.boolDuras,2).subscribe(
        recargar => {
          this.cargaDatosHabDuras(2);
        }
      )
    }
    if(j == 10){
      this.boolDurasSet.s_javascript='false';
      this.boolDuras = this.boolDurasSet;
      this.habDuraService.update(this.boolDuras,2).subscribe(
        recargar => {
          this.cargaDatosHabDuras(2);
        }
      )
    }
    if(j == 11){
      this.boolDurasSet.s_typescript='false';
      this.boolDuras = this.boolDurasSet;
      this.habDuraService.update(this.boolDuras,2).subscribe(
        recargar => {
          this.cargaDatosHabDuras(2);
        }
      )
    }
    if(j == 12){
      this.boolDurasSet.s_git='false';
      this.boolDuras = this.boolDurasSet;
      this.habDuraService.update(this.boolDuras,2).subscribe(
        recargar => {
          this.cargaDatosHabDuras(2);
        }
      )
    }
    if(j == 13){
      this.boolDurasSet.s_adobe_photoshop='false';
      this.boolDuras = this.boolDurasSet;
      this.habDuraService.update(this.boolDuras,2).subscribe(
        recargar => {
          this.cargaDatosHabDuras(2);
        }
      )
    }
  }

  //Ruta activa (permiso editar)

  ruta : String = String(this.rutaActiva.snapshot.url);

  rutaActual :String = 'portfolio,Cristian';

}
