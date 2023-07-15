import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private router:Router, private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
  }


  logear():void{
    this.router.navigate(['/iniciar-sesion']);
  }

   //Ruta activa (permiso editar)

   ruta : String = String(this.rutaActiva.snapshot.url);

   rutaActual :String = 'portfolio,Cristian';

}
