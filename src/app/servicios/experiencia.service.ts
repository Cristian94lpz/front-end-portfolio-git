import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  

  //portfolioURL = 'http://localhost:8080/portfolio/';
  //portfolioURL = 'https://safe-chamber-14222.herokuapp.com/portfolio/';
  portfolioURL = 'http://prueba-definitiva-env.eba-gbxqtppt.us-east-2.elasticbeanstalk.com/portfolio/';

  constructor(private httpClient:HttpClient) { }

  public datosExp():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.portfolioURL + 'experiencias');
  }

  public update(Educacion:Experiencia,id:number):Observable<any>{
    return this.httpClient.put<any>(this.portfolioURL + 'editar_experiencia_' + id ,Educacion);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.portfolioURL + 'borrar_experiencia_'+id);
  }

  public guardar(Educacion:Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.portfolioURL + 'crear_experiencia',Educacion);
  }
}
