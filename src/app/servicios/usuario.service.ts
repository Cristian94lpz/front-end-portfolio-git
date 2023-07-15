import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 //portfolioURL = 'http://localhost:8080/hola/';
 //portfolioURL = 'https://safe-chamber-14222.herokuapp.com/hola/';
 portfolioURL = 'http://prueba-definitiva-env.eba-gbxqtppt.us-east-2.elasticbeanstalk.com/hola/';


  constructor(private httpClient:HttpClient) { }

  public verificar(Usuario:Usuario):Observable<any>{
    return this.httpClient.post<any>(this.portfolioURL + 'iniciar-sesion',Usuario);

  }

}
