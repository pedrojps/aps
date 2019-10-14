import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PalavraService {

  	buscaUrl= environment.API;

	constructor(private http: HttpClient){}

	listar( palavra ) {
		var BpalavraUrl = this.buscaUrl+ "palava-get-nome/"+palavra;
		if (palavra == "") {
			BpalavraUrl  = this.buscaUrl+ 'palava-get-all';
		}
		return this.http.get<any[]>(`${BpalavraUrl}`);
	}

	cria( palavra ) {
		var CpalavraUrl = this.buscaUrl+ "palava-create";
		return this.http.post(CpalavraUrl,palavra);
	}
}
