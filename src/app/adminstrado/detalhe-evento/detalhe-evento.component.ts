import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } 	 from '@angular/router';

import { EventoService } from '../../servisos/evento.service';
import { ArtigoService } from '../../servisos/artigo.service';
import { Evento } from '../../evento';

@Component({
  selector: 'app-detalhe-evento',
  templateUrl: './detalhe-evento.component.html',
  styleUrls: ['./detalhe-evento.component.css']
})
export class DetalheEventoComponent implements OnInit {

	evento = new Evento(); 
	id;
	artigos;
	artigosAprovados;
	artigosRejeitados;
	constructor(private eventoServe: EventoService, 
		private artigoServe : ArtigoService ,
		private route:ActivatedRoute) { 
		this.id = this.route.snapshot.params['id'];
	}

	ngOnInit() {
		this.id=this.id = this.route.snapshot.params['id'];
		this.getEvento(this.id);
		this.getArtigos(this.id);
	}

	getEvento(id){
		this.eventoServe.getEvento(id).subscribe(
			dados=> this.evento = dados
			);
	}

	getArtigos(id){
		this.artigoServe.listar(id).subscribe(dados=> {
				dados.forEach( function (item, indice, array){
					if(item.status== 0)
						item.status='Esterando Revisão';
					else if(item.status== 1)
						item.status='Em Revição';
					else if(item.status== 2)
						item.status='Aceito';
					else if(item.status== 3)
						item.status='Rejeitado';
				});
				this.artigos = dados;
			}
			);
	}


}
