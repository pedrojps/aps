import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } 	 from '@angular/router';
import { Location } 	 from '@angular/common';

import { EventoService } from '../../servisos/evento.service';
import { ArtigoService } from '../../servisos/artigo.service';
import { PalavraService } from '../../servisos/palavra.service';
import { Evento } from '../../evento';

@Component({
  selector: 'app-detalhe-evento',
  templateUrl: './detalhe-evento.component.html',
  styleUrls: ['./detalhe-evento.component.css']
})
export class DetalheEventoComponent implements OnInit {

	evento = new Evento(); 
	palavras='';
	id;
	artigos;
	artigosAprovados;
	artigosRejeitados;

	numArtAceito= 0;
	numArtRejeitado = 0;
	numArtTotal =0;
	constructor(private eventoServe: EventoService, 
		private artigoServe : ArtigoService ,
		private palavraServe: PalavraService,
		private route:ActivatedRoute,
  		private location: Location) { 
		this.id = this.route.snapshot.params['id'];
	}

	ngOnInit() {
		this.id=this.id = this.route.snapshot.params['id'];
		this.getEvento(this.id);
		this.getArtigos(this.id);
		this.getPalavras(this.id);
	}

	getEvento(id){
		this.eventoServe.getEvento(id).subscribe(dados=> this.evento = dados);
	}

	getPalavras(id){
		this.palavraServe.getPalavraByEvento(id).subscribe(
			dados=> {
				var p = '';
				dados.forEach(function (item, indice, array) {
					p= p+item.palavra+" ";
				});
				this.palavras=p;
			}
			);
	}

	getArtigos(id){
		this.artigoServe.listar(id).subscribe(dados=> {
			var numAceito= 0;
			var numRejeitado = 0;
			var numTotal =0;
			dados.forEach(function (item, indice, array) {
				if(item.status == "Aceito"){
					numAceito++;
				}else if (item.status == "Rejeitado"){
					numRejeitado++;
				}
				numTotal++;
				
			});
				this.artigos = dados;
			});
	}

	cancela(){
  		this.location.back();
  	}
}
