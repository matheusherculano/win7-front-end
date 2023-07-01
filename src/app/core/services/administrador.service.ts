import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, delay, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  sheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.authService.getToken()}`
  });

  private getHeaders(){
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return {headers:headers};
  }

  constructor(private httpCliente: HttpClient, private authService:AuthService) { }

  public getAllUsuariosByAmbiente() {
    const url = `${environment.baseUrlBackend}/usuario/all-in-ambiente`;

    return this.httpCliente.get(url, this.getHeaders()).pipe(
      map((data) => {
        return data;
      }),
      catchError((err) => {
        throw err.error
      })
    )
  }

  public excluirUsuario(idUsuario){
    const url = `${environment.baseUrlBackend}/usuario/delete/${idUsuario}`;

    return this.httpCliente.get(url, this.getHeaders()).pipe(
      map((data) => {
        return data;
      }),
      catchError((err) => {
        throw err.error
      })
    )
  }

  public cadastrarUsuario(form){
    const url = `${environment.baseUrlBackend}/usuario`


    return this.httpCliente.post(url, this.buildDTO(form), this.getHeaders()).pipe(
      map((data) => {
        
      }),
      catchError((err) => {
        throw err.error
      })
    )
  }

  private buildDTO(form){
    var dto = {};
    dto['nome'] = form.nomeCompleto;
    dto['login'] = form.login;
    dto['senha'] = form.password;
    dto['email'] = form.email;
    dto['whatsapp'] = form.whatsapp.replace(/[^0-9]+/g,''); //removendo mascara telefone;

    return dto;
  }
}
