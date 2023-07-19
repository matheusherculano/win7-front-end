import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as _ from "lodash";
import { Observable, catchError, delay, map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public roles = [];
  public usuarioLogado = { nome: "", usuario: "" };

  constructor(private httpCliente: HttpClient, private router: Router) {}

  public logar(
    ambiente: string,
    usuario: string,
    senha: string
  ): Observable<any> {
    const url = `${environment.baseUrlBackend}/auth/login`;

    return this.httpCliente
      .post(url, { ambiente, usuario, senha }, { responseType: "text" })
      .pipe(
        map((data) => {
          this.setTokenLocalStorage(data);
        }),
        catchError((err) => {
          this.removerTokenLocalStorage();
          if (typeof err.error === "string") {
            throw err.error;
          } else {
            throw err.message;
          }
        })
      );
  }

  public getUserPrincipal(): Observable<any> {
    const url = `${environment.baseUrlBackend}/auth/userprincipal`;

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`,
    });

    return this.httpCliente.get(url, { headers }).pipe(
      map((data) => {
        this.setRolesInContext(data["authorities"]);
        this.usuarioLogado.usuario = data["username"];
        this.usuarioLogado.nome =
          data["username"][0].toUpperCase() + data["username"].substring(1);
        return true;
      }),
      catchError((err) => {
        this.removerTokenLocalStorage();
        throw err.error;
      })
    );
  }

  isAutorizado() {}

  public getToken(): string | null {
    return localStorage.getItem(environment.token);
  }

  private setRolesInContext(authorities) {
    this.roles = _.map(authorities, "authority");
  }

  public removerTokenLocalStorage(): void {
    localStorage.removeItem(environment.token);
  }

  private setTokenLocalStorage(token: string): void {
    localStorage.setItem(environment.token, token);
  }
}
