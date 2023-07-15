import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  //portfolioURL = 'http://localhost:8080/portfolio/';
  //portfolioURL = 'https://safe-chamber-14222.herokuapp.com/portfolio/';
  portfolioURL = 'http://prueba-definitiva-env.eba-gbxqtppt.us-east-2.elasticbeanstalk.com/portfolio/';

  constructor(private httpClient:HttpClient) { }

  public datosProyecto():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.portfolioURL + 'proyectos');
  }

  public update(Proyecto:Proyecto,id:number):Observable<any>{
    return this.httpClient.put<any>(this.portfolioURL + 'editar_proyecto_' + id ,Proyecto);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.portfolioURL + 'borrar_proyecto_'+id);
  }

  public guardar(Proyecto:Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.portfolioURL + 'crear_proyecto',Proyecto);
  }
}
