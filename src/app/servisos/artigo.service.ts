import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'
import { ArtigoSub } from '../artigo-submit';

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
	listarByUser( id ) {
		var BucarUrl = this.Url+ "artigo-user-get/"+id;
		return this.http.get<any[]>(`${BucarUrl}`);
	}

	listarByRevisor( id ) {
		var BucarUrl = this.Url+ "artigo-all-get-revisor/"+id;
		return this.http.get<any[]>(`${BucarUrl}`);
	}
	buscar( busca ) {
		var BucarUrl = this.Url+ "artigo-busca/"+busca;
		return this.http.get<any[]>(`${BucarUrl}`);
	}

	getArtigo( id ) {
		var BucarUrl = this.Url+ "artigo-get/"+id;
		return this.http.get<any>(`${BucarUrl}`);
	}
	upload(file:File,artigo:ArtigoSub){

		const formData = new FormData();

		formData.append('arquivo',file,file.name);

		formData.append('resumo',artigo.resumo);
		formData.append('evento_id',artigo.evento_id);
		formData.append('status',artigo.status);
		formData.append('autor',artigo.autor);
		formData.append('titulo',artigo.titulo);

		var BucarUrl = this.Url+ "artigo-create";
		return this.http.post(`${BucarUrl}`,formData);

	}

	uploadAutores(autores){

		var BucarUrl = this.Url+ "autores-create";
		return this.http.post(`${BucarUrl}`,autores);

	}

	updateRevisor(up){
		var BucarUrl = this.Url+ "set-revisor/";
		return this.http.put(`${BucarUrl}`,up);
	}

	update(up){
		var BucarUrl = this.Url+ "update-artigo/"+up.id;
		return this.http.put(`${BucarUrl}`,up);
	}
}
