import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  	Url= environment.API;

	constructor(private http: HttpClient){}

	listar( nome ) {
		var BucarUrl = this.Url+ "area-get-nome/"+nome;
		if (nome == "") {
			BucarUrl  = this.Url+ 'area-get-all';
		}
		return this.http.get<any[]>(`${BucarUrl}`);
	}

	cria( area ) {
		var CpalavraUrl = this.Url+ "area-create";
		return this.http.post(CpalavraUrl,area);
	}

	getEventoByArea(id){
		var CpalavraUrl = this.Url+ "areaid-evento-get/"+id;
		return this.http.get<any[]>(`${CpalavraUrl}`);
	}

	deleta( id ) {
		var CpalavraUrl = this.Url+ "area-delete/"+id;
		return this.http.delete(CpalavraUrl);
	}
}
