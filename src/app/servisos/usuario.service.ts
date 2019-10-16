import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

	Url= environment.API;

	constructor(private http: HttpClient){}

	cria( user ) {
		var CpalavraUrl = this.Url+ "user-create";
		return this.http.post(CpalavraUrl,user);
	}
	update(user, id){
		var CpalavraUrl = this.Url+ "user-update/"+id;
		return this.http.put(CpalavraUrl,user);
	}

	getProfessores(id){
		var CpalavraUrl = this.Url+ "get-professores/"+id;
		return this.http.get<any[]>(CpalavraUrl);
	}

}
