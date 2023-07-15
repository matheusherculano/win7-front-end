import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private getHeaders() {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    return { headers: headers };
  }
  
  constructor(private httpCliente: HttpClient,
    private authService: AuthService) { }

    public getAllClientes() {
      const url = `${environment.baseUrlBackend}/cliente/get-all`;
  
      return this.httpCliente.get(url, this.getHeaders()).pipe(
        map((data) => {
          return data;
        }),
        catchError((err) => {
          throw err.error;
        })
      );
    }
    public getClienteById(idCliente) {
      const url = `${environment.baseUrlBackend}/cliente/get/${idCliente}`;
  
      return this.httpCliente.get(url, this.getHeaders()).pipe(
        map((data) => {
          return data;
        }),
        catchError((err) => {
          throw err.error;
        })
      );
    }
    
    public getMetrics(adwords) {
      const url = `${environment.baseUrlBackend}/cliente/metrics/${adwords}`;
  
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
