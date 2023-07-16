import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlyNumbersGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const idCliente = route.paramMap.get('idCliente');

     if(this.possuiApenasNumeros(idCliente)){
      return true;
     }else{
      this.router.navigate(['clientes']);
      return false;
     }
  }

  private possuiApenasNumeros(str: string): boolean { //verificação se o id passado na url é somente números
    return /^\d+$/.test(str);
  }
  
}
