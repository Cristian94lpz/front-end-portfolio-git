import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadBlanda } from '../models/habilidad-blanda';

@Injectable({
  providedIn: 'root'
})
export class HabilidadBlandaService {

  //portfolioURL = 'http://localhost:8080/portfolio/';
  //portfolioURL = 'https://safe-chamber-14222.herokuapp.com/portfolio/';
  portfolioURL = 'http://prueba-definitiva-env.eba-gbxqtppt.us-east-2.elasticbeanstalk.com/portfolio/';

  constructor(private httpClient:HttpClient) { }

  public datosHabBlanda(id:number):Observable<HabilidadBlanda>{
    return this.httpClient.get<HabilidadBlanda>(this.portfolioURL + 'HabilidadesBlandas_'+id);
  }

  public update(HabilidadBlanda:HabilidadBlanda,id:number):Observable<any>{
    return this.httpClient.put<any>(this.portfolioURL + 'editar_habilidadblanda_' + id ,HabilidadBlanda);
  }
}
