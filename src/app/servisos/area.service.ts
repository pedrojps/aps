import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  const buscaUrl= environment.API;

	constructor(private http: HttpClient){}

	listar( nome : String) {
		const BpalavraUrl = this.buscaUrl+ "/area-get-nome/"+nome;
		if (nome == "") {
			BpalavraUrl : String = this.buscaUrl+ '/area-get-all';
		}
		return this.http.get<any[]>(`${BpalavraUrl}`);
	}
}
