import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //portfolioURL = 'http://localhost:8080/portfolio/';
  //portfolioURL = 'https://safe-chamber-14222.herokuapp.com/portfolio/';
  portfolioURL = 'http://prueba-definitiva-env.eba-gbxqtppt.us-east-2.elasticbeanstalk.com/portfolio/';

  constructor(private httpClient:HttpClient) { }

  public datosEdu():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.portfolioURL + 'cursos');
  }

  public update(Educacion:Educacion,id:number):Observable<any>{
    return this.httpClient.put<any>(this.portfolioURL + 'editar_curso_' + id ,Educacion);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.portfolioURL + 'borrar_curso_'+id);
  }

  public guardar(Educacion:Educacion):Observable<any>{
    return this.httpClient.post<any>(this.portfolioURL + 'crear_curso',Educacion);
  }

}


