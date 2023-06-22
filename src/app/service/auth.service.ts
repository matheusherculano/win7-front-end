import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpCliente: HttpClient) { }

  public logar(ambiente: string, usuario: string, senha: string): Observable<any> {
    const url = `${environment.baseUrlBackend}/auth/login`
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { usuario, senha };

   return this.httpCliente.post<any>(url, body, { headers });

    // return this.httpCliente.post(url, { usuario, senha }, { responseType: 'json' }).pipe(
    //   map((data) => this.setTokenLocalStorage(data)),
    //   catchError((err) => {
    //     this.removerTokenLocalStorage();
    //     // console.log("Erro aqui mlk", err);
    //     throw err.error
    //   })
    // )
  }


  isAutorizado() { }
  deslogar() { }

  public getToken():string | null{
    return localStorage.getItem(environment.token);
  }

  private removerTokenLocalStorage(): void {
    localStorage.removeItem(environment.token);
  }

  private setTokenLocalStorage(response: any): void {
    const { type, token, _ } = response;
    localStorage.setItem(environment.token, token);
  }
}
