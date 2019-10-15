import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } 	 from '@angular/router';
import { Location } 	 from '@angular/common';

import { PalavraService } from '../../servisos/palavra.service';
import { AreaService } from '../../servisos/area.service';
import { EventoService } from '../../servisos/evento.service';
import { Evento } from '../../evento';

@Component({
  selector: 'app-edit-evento',
  templateUrl: './edit-evento.component.html',
  styleUrls: ['./edit-evento.component.css']
})
export class EditEventoComponent implements OnInit {
  id;

  palavras;

  areas;

  evento: Evento;

  mensagem;

  palavrasSelct=[];

  constructor(private areaServe: AreaService,
  	private palavraServe: PalavraService,
  	private eventoServe: EventoService,
  	private route:ActivatedRoute,
  	private location: Location) {
 	this.id = this.route.snapshot.params['id'];
   }

   ngOnInit() {
  	this.id=this.id = this.route.snapshot.params['id'];
  	this.getEvento(this.id);
  	this.listePalavra();
  	this.listeAras();
  }

  checkedLista(){
  	var x = document.getElementById("palavrasList").getElementsByTagName("input");
	var palavras = new Array();
	var j=0;
	for (var i = 0; i < x.length; i++) {
		if(x[i].checked==true){
			palavras[j]=x[i].value;
			j++
		}
	}
	return palavras;
  }

  validePeriodoSub(){
	if(this.evento.inicio_submicao>this.evento.fim_submissao){
		alert('A submição não pode acaba antes mesmo de começar');
		document.getElementById("subi_de").focus();
		return false;
	}
	return true;
  }
  validePeriodoEvent(){
	if(this.evento.inicio_evento>this.evento.fim_evento){
		alert('O evento não pode acaba antes mesmo de começar');
		document.getElementById("evento_de").focus();
		return false;
	}
	return true;
  }

  valideNome(){
  	if(this.evento.nome.length<0){
		alert('Campo nome esta vazio');
		document.getElementById("nome").focus();
		return false;
	}
	return true;
  }

  valideSigla(){
	if(this.evento.sigla.length<0){
		alert('Campo sigla esta vazio');
		document.getElementById("sigla").focus();
		return false;
	}
	return true;
  }

  valideArea(){
	if(this.evento.area_de_pesquisa=="-1"){
		alert('Selecione uma área');
		document.getElementById("area").focus();
		return false;
	}
	return true;
  }

  cria(){
  	var sigrae =this.valideSigla();
  	var nomes =this.valideNome();
  	var pEvento =this.validePeriodoEvent();
  	var pSub =this.validePeriodoSub();
  	var areae =this.valideArea();
  	if(sigrae==false||nomes==false||pEvento==false||pSub==false||areae==false)
  		return false;

  	console.log(this.evento);

  	var evento2 = {
  		fim_evento: this.evento.fim_evento,
  		inicio_evento: this.evento.inicio_evento,

  		fim_submissao: this.evento.fim_submissao,
  		inicio_submicao: this.evento.inicio_submicao,
  		nome: this.evento.nome,
  		sigla : this.evento.sigla,
  		area_de_pesquisa_id: this.evento.area_de_pesquisa_id
  	}

    this.eventoServe.update(evento2,this.id).subscribe(
          success => this.eventoServe.deletaPalavra(this.id).subscribe(()=>{
              var lischc=[];
              var ids= this.id;
              this.checkedLista().forEach(function (item, indice, array) {
                lischc[indice]={evento_id: ids , palavra_chave_id: item }
              });
              console.log(lischc);
              this.eventoServe.criaEventoPalavras(lischc).subscribe();
              alert('Evento auterado com susseso');
              this.location.back();
            })
          , error=> this.mensagem= "Evento não pode ser salvo");
  }

  cancela(){
  	this.location.back();
  }

  chekboxObserve(e){
  	console.log(this.checkedLista());
  }

  getEvento(id){
		this.eventoServe.getEvento(id).subscribe(
			dados=> this.evento = dados
			);
	}

  listePalavra(){
  	this.palavraServe.listar('')
  		.subscribe(dados => this.palavras = dados);
  }

  listeAras( ){
  	this.areaServe.listar('')
  		.subscribe(dados => this.areas = dados);
  }

  getPalavras(id){
		this.palavraServe.getPalavraByEvento(id)
		.subscribe(dados=> {
			var p = [];
			dados.forEach(function (item, indice, array) {
				p.push(item.id);
			});
			console.log(p);
			console.log(dados);
			marcaPalavras(p);
		});
	}
	marcaPalavras(dados){
	  	var x = document.getElementById("palavrasList").getElementsByTagName("input");
		for (var i = 0; i < x.length; i++) {
			if(dados.idsE.indexOf(x[i].value)!=-1){
				document.getElementById("chec-"+x[i].value).checked = true;
			}
		}
	}
}

