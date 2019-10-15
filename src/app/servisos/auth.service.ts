import { Injectable,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'
import { Usuario } from '../usuario';
import { Adimin } from '../adimin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	Url= environment.API;
	private adiminAutenticado: boolean = false;

	private admin: Adimin;

  private usuario;

	private usuarioAutenticado: boolean = false;

	mostaMenuAdiminEmitter= new EventEmitter<boolean>();

	mostaMenuUsuarioEmitter= new EventEmitter<boolean>();

  constructor(private router: Router,private http: HttpClient) { }

  fazerLoginAdmin(usuario:Usuario){


	var BpalavraUrl = this.Url+ "altentic-adimin-get";
	return this.http.post(`${BpalavraUrl}`,usuario).subscribe(dados=>{
  		console.log(dados);
  		if(dados.length!=0){
  			this.admin=dados[0];
  			this.adiminAutenticado= true;
  			this.mostaMenuAdiminEmitter.emit(true);
  			this.router.navigate(['/eventobusca']);
    		} else {
  	  		this.adiminAutenticado= false;
  	  		alert("senha ou login estão erados")
  	  		this.mostaMenuAdiminEmitter.emit(false);
    		}
  	});
  }

  fazerLoginUsuario(usuario:Usuario){
    var BpalavraUrl = this.Url+ "altentic-usuario-get";
    return this.http.post(`${BpalavraUrl}`,usuario).subscribe(dados=>{
      console.log(dados);
      if(dados.length!=0){
        this.usuario=dados[0];
        this.usuarioAutenticado= true;
        this.mostaMenuUsuarioEmitter.emit(true);
        this.router.navigate(['/']);
        } else {
          this.usuarioAutenticado= false;
          alert("senha ou login estão erados")
          this.mostaMenuUsuarioEmitter.emit(false);
        }
    });
  }

  adiminEstaAutenticado(){
  	return this.adiminAutenticado;
  }

  usuarioEstaAutenticado(){
  	return this.usuarioAutenticado;
  }

  getUsuario(){
    return this.usuario;
  }
}
