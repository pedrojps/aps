import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {
	Url= environment.API;

	constructor(private http: HttpClient){}

	listar( id ) {
		var BucarUrl = this.Url+ "artigo-liste-by-evento/"+id;
		return this.http.get<any[]>(`${BucarUrl}`);
	}
}
