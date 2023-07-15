import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';




@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {


  autenticacion:boolean = false;
  
  //usuario: cristian Contraseña : cristian00 
  constructor(private usuarioService:UsuarioService,private router:Router,private FormBuilder:FormBuilder) { }

 
  form:FormGroup;
 
  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.form = this.FormBuilder.group({
     nombre:['',[Validators.required]],
     password:['',[Validators.required]]
    })
  }

verificar(event:Event):void{
  event.preventDefault();
  this.usuarioService.verificar(this.form.value).subscribe(
    data =>{
      this.autenticacion = data;
      if(this.autenticacion == true){
        this.router.navigate(['/portfolio/Cristian']);
      }
    },
    err =>{
      alert(err.error.mensaje);
    

    }
  );
}


get Nombre(){
  return this.form.get('nombre');
}

get Password(){
  return this.form.get('password');
}


}
