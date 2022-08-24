import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private router:Router, private authService: AuthService ){}
  
canActivate(){
    if(this.authService.isAuthentic()){
      return true;
    }else{
      alert("No estás logueado");
      this.router.navigate(['/login']);
      return false;
    }

  }
  
}
