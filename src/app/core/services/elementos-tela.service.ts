import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementosTelaService {

  constructor(private httpCliente: HttpClient,
    private authService: AuthService) { }

  private getHeaders() {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    return { headers: headers };
  }

  public getPeriodoAdsList() {
    const url = `${environment.baseUrlBackend}/elementos-tela/periodo-ads`;

    return this.httpCliente.get(url, this.getHeaders()).pipe(
      map((data) => {
        return data;
      }),
      catchError((err) => {
        throw err.error;
      })
    );
  }
}
