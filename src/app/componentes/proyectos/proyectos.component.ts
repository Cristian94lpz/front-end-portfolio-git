import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  proyecto0 : Proyecto = new Proyecto('','','','\\assets\\img\\logo\\impresion-pagina.jpg');
  nombre:String ='';
  descripcion:String='';
  url:String='';
  fotourl:String='\\assets\\img\\logo\\impresion-pagina.jpg';
 
  

  constructor(private proyectoService:ProyectoService,private router:Router,private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
   this.cargaDatosProyecto();
  }

  //Carga datos cursos
  cargaDatosProyecto():void{
    this.proyectoService.datosProyecto().subscribe(
      data =>{ 
        this.proyectos = data;
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
  //Editar proyecto
  onUpdate(event:Event,id:number):void{
    event.preventDefault();
    this.proyectoService.update(this.proyecto0,id).subscribe(
      data => {
        alert('valor actualizado');
        
        this.router.navigate(['/portfolio/Cristian']);
        
      },
      actualizar =>{
        this.cargaDatosProyecto();
        this.noverForm();
      }
    );
    
  }

  //Eliminar proyecto
  borrarProyecto(id?:number){
    if(id != NaN){
    this.proyectoService.delete(id ? id : NaN).subscribe(
      data =>{
        alert('borrado');
        this.router.navigate(['/portfolio/Cristian']);
      },
      actualizar =>{
        this.cargaDatosProyecto();
      }
  
    );
    }
  }

  //Crear proyecto
  crearProyecto():void{
    let proyectoN = new Proyecto(this.nombre,this.descripcion,this.url,this.fotourl);
    this.proyectoService.guardar(proyectoN).subscribe(
      data =>{
        alert('proyecto anadido');
        this.router.navigate(['/portfolio/Cristian']);
      },
      actualizar =>{
        this.cargaDatosProyecto();
        this.noMostrar();
        this.nombre ='';
        this.descripcion='';
        this.url='';
        this.fotourl='\\assets\\img\\logo\\impresion-pagina.jpg';
       
        

      }
    )
  
  }

  //Ruta activa (permiso editar)

  ruta : String = String(this.rutaActiva.snapshot.url);

  rutaActual :String = 'portfolio,Cristian';

}
