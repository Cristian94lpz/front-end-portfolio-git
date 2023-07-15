import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/models/educacion';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  cursos: Educacion[] = [];
  curso0 : Educacion = new Educacion('','','','','','','','','','','','','','','\\assets\\img\\logo\\imagen-curso-arg-programa.jpg','');
  nombre_curso:String ='';
  descripcion_curso:String='';
  modulo1:String='';
  modulo2:String='';
  modulo3:String='';
  modulo4:String='';
  modulo5:String='';
  modulo6:String='';
  modulo7:String='';
  modulo8:String='';
  modulo9:String='';
  modulo10:String='';
  modulo11:String='';
  modulo12:String='';
  foto_curso:String='\\assets\\img\\logo\\imagen-curso-arg-programa.jpg';
  nombre_instituto_curso:String='';

  constructor(private educacionService:EducacionService,private router:Router,private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
   this.cargaDatosEdu();
  }

  //Carga datos cursos
  cargaDatosEdu():void{
    this.educacionService.datosEdu().subscribe(
      data =>{ 
        this.cursos = data;
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
  //Editar curso
  onUpdate(event:Event,id:number):void{
    event.preventDefault();
    this.educacionService.update(this.curso0,id).subscribe(
      data => {
        alert('valor actualizado');
        
        this.router.navigate(['/portfolio/Cristian']);
        
      },
      actualizar =>{
        this.cargaDatosEdu();
        this.noverForm();
      }
    );
    
  }

  //Eliminar curso
  borrarCurso(id?:number){
    if(id != NaN){
    this.educacionService.delete(id ? id : NaN).subscribe(
      data =>{
        alert('borrado');
        this.router.navigate(['/portfolio/Cristian']);
      },
      actualizar =>{
        this.cargaDatosEdu();
      }
  
    );
    }
  }

  //Crear curso
  crearCurso():void{
    let cursoN = new Educacion(this.nombre_curso,this.descripcion_curso,this.modulo1,this.modulo2,this.modulo3,this.modulo4,this.modulo5,this.modulo6,this.modulo7,this.modulo8,this.modulo9,this.modulo10,this.modulo11,this.modulo12,this.foto_curso,this.nombre_instituto_curso);
    this.educacionService.guardar(cursoN).subscribe(
      data =>{
        alert('curso anadido');
        this.router.navigate(['/portfolio/Cristian']);
      },
      actualizar =>{
        this.cargaDatosEdu();
        this.noMostrar();
        this.nombre_curso ='';
        this.descripcion_curso='';
        this.modulo1='';
        this.modulo2='';
        this.modulo3='';
        this.modulo4='';
        this.modulo5='';
        this.modulo6='';
        this.modulo7='';
        this.modulo8='';
        this.modulo9='';
        this.modulo10='';
        this.modulo11='';
        this.modulo12='';
        this.foto_curso='\\assets\\img\\logo\\imagen-curso-arg-programa.jpg';
        this.nombre_instituto_curso='';

      }
    )
  
  }

  //Ruta activa (permiso editar)

  ruta : String = String(this.rutaActiva.snapshot.url);

  rutaActual :String = 'portfolio,Cristian';

}
