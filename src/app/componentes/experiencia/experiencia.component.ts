import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[] = [];
  experiencia0 : Experiencia = new Experiencia('','','','','\\assets\\img\\logo\\logo-company.jpg');
  puesto:String ='';
  empresa:String='';
  inicio:String='';
  fin:String='';
  fotourl:String='\\assets\\img\\logo\\logo-company.jpg';
  

  constructor(private experienciaService:ExperienciaService,private router:Router,private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
   this.cargaDatosExp();
  }

  //Carga datos cursos
  cargaDatosExp():void{
    this.experienciaService.datosExp().subscribe(
      data =>{ 
        this.experiencias = data;
      }
      ,
      err =>{
        console.log(err.error);
      }
    )
  }

  //Vista formulario
  estado:boolean=false;
  onForm:number=NaN;
  onEdit:boolean = true;

  desactivar():void{
   this.estado=false;
   window.location.reload();
  }

  activar():void{
    this.estado=true;
  }

  verForm(id?:number):void{
    this.onForm = id ? id : NaN;
  }
  noverForm():void{
    this.onForm = NaN;
    this.onEdit = true;
  }
  offEdit():void{
    this.onEdit = false;
  
  }
  btnEdit(id?:number):void{
    this.verForm(id);
    this.offEdit();
    this.mostrar();
  }
  btnUpdate(event:Event,id:number):void{
    this.onUpdate(event,id);
    this.noMostrar();
  }  
  //Vista formulario crear
  mostrar0 : boolean=false;

  mostrar():void{
    this.mostrar0 = true;
  }  
  noMostrar():void{
    this.mostrar0 = false;
  }
  //Editar experiencia
  onUpdate(event:Event,id:number):void{
    event.preventDefault();
    this.experienciaService.update(this.experiencia0,id).subscribe(
      data => {
        alert('valor actualizado');
        
        this.router.navigate(['/portfolio/Cristian']);
        
      },
      actualizar =>{
        this.cargaDatosExp();
        this.noverForm();
      }
    );
    
  }

  //Eliminar experiencia
  borrarExperiencia(id?:number){
    if(id != NaN){
    this.experienciaService.delete(id ? id : NaN).subscribe(
      data =>{
        alert('borrado');
        this.router.navigate(['/portfolio/Cristian']);
      },
      actualizar =>{
        this.cargaDatosExp();
      }
  
    );
    }
  }

  //Crear experiencia
  crearExperiencia():void{
    let expN = new Experiencia(this.puesto,this.empresa,this.inicio,this.fin,this.fotourl);
    this.experienciaService.guardar(expN).subscribe(
      data =>{
        alert('experiencia anadido');
        this.router.navigate(['/portfolio/Cristian']);
      },
      actualizar =>{
        this.cargaDatosExp();
        this.noMostrar();
        this.puesto ='';
        this.empresa='';
        this.inicio='';
        this.fin='';
        this.fotourl='\\assets\\img\\logo\\\logo-company.jpg';
        

      }
    )
  
  }

  //Ruta activa (permiso editar)

  ruta : String = String(this.rutaActiva.snapshot.url);

  rutaActual :String = 'portfolio,Cristian';
}
