import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  	buscaUrl= environment.API;

	constructor(private http: HttpClient){}

	listar( nome ) {
		var BpalavraUrl = this.buscaUrl+ "evento-get-nome/"+nome;
		if (nome == "") {
			BpalavraUrl = this.buscaUrl+ 'evento-get-all';
		}
		return this.http.get<any[]>(`${BpalavraUrl}`);
	}
}
