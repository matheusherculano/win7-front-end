import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpCliente: HttpClient) {
    
   }

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

  public getUserPrincipal(): Observable<any> {
    const url = `${environment.baseUrlBackend}/auth/userprincipal`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    })
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbGFpbmUiLCJpc3MiOiJXaW43IiwiaWQiOiJlbGFpbmUiLCJleHAiOjE2ODc1NDMwNjN9.d2k2UiyzPzZklDbp9qfxviBzz1yUSv6oahwdTRxrMi4`
    // })

    return this.httpCliente.get(url, { headers }).pipe(
      map((data) => {
        console.log("user principal",data)
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
