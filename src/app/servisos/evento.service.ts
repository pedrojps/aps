import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  	Url= environment.API;

	constructor(private http: HttpClient){}

	listar( nome ) {
		var BpalavraUrl = this.Url+ "evento-get-nome/"+nome;
		if (nome == "") {
			BpalavraUrl = this.Url+ 'evento-get-all';
		}
		return this.http.get<any[]>(`${BpalavraUrl}`);
	}

	listarPalavrasByEvento() {
		var BpalavraUrl = this.Url+ "evento-palavra-get";
		return this.http.get<any[]>(`${BpalavraUrl}`);
	}

	cria( area ) {
		var CpalavraUrl = this.Url+ "evento-create";
		return this.http.post(CpalavraUrl,area);
	}

	criaEventoPalavras( area ) {
		var CpalavraUrl = this.Url+ "evento-palavra";
		return this.http.post(CpalavraUrl,area);
	}

	deleta( id ) {
		var CpalavraUrl = this.Url+ "evento-delete/"+id;
		return this.http.delete(CpalavraUrl);
	}

	deletaPalavra( id ) {
		var CpalavraUrl = this.Url+ "delete-evento-palavra/"+id;
		return this.http.delete(CpalavraUrl);
	}

	listeArtigos(id){
		var BpalavraUrl = this.Url+ "artigo-liste-by-evento/"+id;
		return this.http.get<any[]>(`${BpalavraUrl}`);
	}
}
