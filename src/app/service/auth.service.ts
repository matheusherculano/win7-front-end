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

    return this.httpCliente.post(url, { usuario, senha }, { responseType: 'text' }).pipe(
      map((data) => {
        console.log("a",data)
        this.setTokenLocalStorage(data)
      }),
      catchError((err) => {
        this.removerTokenLocalStorage();
        throw err.error
      })
    )
  }


  isAutorizado() { }
  deslogar() { }

  public getToken():string | null{
    return localStorage.getItem(environment.token);
  }

  private removerTokenLocalStorage(): void {
    localStorage.removeItem(environment.token);
  }

  private setTokenLocalStorage(token: string): void {
    localStorage.setItem(environment.token, token);
  }
}
