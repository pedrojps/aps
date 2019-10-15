import { Obsevable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,Router} from "@angular/router"

import { AuthService } from '../servisos/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthUsuarioGuard implements CanActivate{

  constructor(
  		private authServe:AuthService,
  		private router: Router
  	) { }

  canActivate(
  	route : ActivatedRouteSnapshot, 
  	state: RouterStateSnapshot) : Obsevable<boolean> | boolean{

  	if(this.authServe.adiminEstaAutenticado()){
  		return true;
  	}

  	this.router.navigate(['/loginadimin'])
  	return false;
  }
}
