import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }
  // constructor(private router: Router, private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var hasAutorizacao = false;
     return this.authService.getUserPrincipal().toPromise().then(
      successRes=>{
        return successRes;
      }
     );
      
    // if (!hasAutorizacao) {
    //   this.router.navigate(['pages/login'], { queryParams: { returnUrl: state.url } });
    //   return false; //bloqueando navegação de usuario não auth
    // }
    // return true;
  }
}
