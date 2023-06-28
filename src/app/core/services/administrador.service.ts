import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, delay, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private httpCliente: HttpClient, private authService:AuthService) { }

  public cadastrarUsuario(form){
    const url = `${environment.baseUrlBackend}/usuario`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    })
    

    return this.httpCliente.post(url, this.buildDTO(form), {headers}).pipe(
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
    dto['usuario'] = form.usuario;
    dto['senha'] = form.password;
    dto['email'] = form.email;
    dto['whatsapp'] = form.whatsapp.replace(/[^0-9]+/g,''); //removendo mascara telefone;

    return dto;
  }
}
