import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PalavraService {

  const buscaUrl= environment.API;

	constructor(private http: HttpClient){}

	listar( palavra : String) {
		const BpalavraUrl = this.buscaUrl+ "/palava-get-nome/"+palavra;
		if (palavra == "") {
			BpalavraUrl : String = this.buscaUrl+ '/palava-get-all';
		}
		return this.http.get<any[]>(`${BpalavraUrl}`);
	}
}
