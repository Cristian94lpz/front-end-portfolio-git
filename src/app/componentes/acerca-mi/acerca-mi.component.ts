import { Component, OnInit } from '@angular/core';
import { Acercami } from 'src/app/models/acercami';
import { AcercaService } from 'src/app/servicios/acerca.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-acerca-mi',
  templateUrl: './acerca-mi.component.html',
  styleUrls: ['./acerca-mi.component.css']
})
export class AcercaMiComponent implements OnInit {
  
  acerca : Acercami = new Acercami('Descripcion','\\assets\\img\\logo\\foto-mia.jpg');
  acercami :Acercami = new Acercami('','\\assets\\img\\logo\\foto-mia.jpg');
  form:FormGroup;

  constructor(private acercaService:AcercaService,private router:Router,private rutaActiva:ActivatedRoute,private FormBuilder:FormBuilder) {
    
  }

  ngOnInit(): void {
    this.cargaDescripcion();
    this.buildForm();
  }

  private buildForm(){
    this.form = this.FormBuilder.group({
     descripcion:['',[Validators.required,Validators.maxLength(255)]],
     fotourl:['\\assets\\img\\logo\\foto-mia.jpg']
     
    })
  }

//Carga datos

cargaDescripcion():void{

  this.acercaService.descripcion().subscribe(
    data =>{
      this.acerca = data;
    },
    err =>{
      console.log(err.error);
    }
  )
}



//Vista formulario
  estado:boolean=false;

  desactivar():void{
   this.estado=false;

  }

  activar():void{
    this.estado=true;

  }

  //Editar
  onUpdate(event:Event):void{
    event.preventDefault();
    
    this.acercaService.update(this.form.value).subscribe(
      data => {
        alert('valor actualizado');
        
        this.router.navigate(['/portfolio/Cristian']);
        
      },
      actualizar =>{
        this.cargaDescripcion();
      }
    );
    
  }

  //Ruta activa (permiso editar)

  ruta : String = String(this.rutaActiva.snapshot.url);

  rutaActual :String = 'portfolio,Cristian';
  
}



