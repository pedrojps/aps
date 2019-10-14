import { Component, OnInit } from '@angular/core';

import { PalavraService } from '../../servisos/palavra.service';
import { AreaService } from '../../servisos/area.service';
import { EventoService } from '../../servisos/evento.service';


@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent implements OnInit {

  constructor(private areaServe: AreaService,private palavraServe: PalavraService,private eventoServe: EventoService) { }

  palavras;

  areas;

  palavrasSelct=[];

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
	var sDe = document.getElementById("subi_de").value;
	var sAte = document.getElementById("subi_ate").value;

	if(sDe>sAte){
		alert('A submição não pode acaba antes mesmo de começar');
		document.getElementById("subi_de").focus();
		return false;
	}
	return [sDe,sAte];
  }
  validePeriodoEvent(){
  	var eDe = document.getElementById("evento_de").value;
	var eAte = document.getElementById("evento_ate").value;

	if(eDe>eAte){
		alert('O evento não pode acaba antes mesmo de começar');
		document.getElementById("evento_de").focus();
		return false;
	}
	return [eDe,eAte];
  }

  valideNome(){
  	var nome = document.getElementById("nome").value;

	if(nome.length<0){
		alert('Campo nome esta vazio');
		document.getElementById("nome").focus();
		return false;
	}
	return nome;
  }

  valideSigla(){
  	var sigla = document.getElementById("sigla").value;

	if(sigla.length<0){
		alert('Campo sigla esta vazio');
		document.getElementById("sigla").focus();
		return false;
	}
	return sigla;
  }

  valideArea(){
  	var area = document.getElementById("area").value;

	if(area=="-1"){
		alert('Selecione uma área');
		document.getElementById("area").focus();
		return false;
	}
	return area;
  }

  cria(){
  	var sigrae =this.valideSigla();
  	var nome =this.valideNome();
  	var pEvento =this.validePeriodoEvent();
  	var pSub =this.validePeriodoSub();
  	var area =this.valideArea();
  	if(sigrae==false||nome==false||pEvento==false||pSub==false||area==false)
  		return false;

  	var evento = {
  		fim_evento: pEvento[1],
  		inicio_evento: pEvento[0],

  		fim_submissao: pSub[1],
  		inicio_submicao: pSub[0],
  		nome: nome,
  		sigla : sigrae,
  		area_de_pesquisa_id: area
  	}
  	console.log(evento);
  	//console.log(this.valideSigla());
  	//console.log(this.valideNome());
  	//console.log(this.validePeriodoEvent());
  	//console.log(this.validePeriodoSub());
  	//console.log(this.valideArea());
  }

  chekboxObserve(e){
  	console.log(this.checkedLista());
  }

  ngOnInit() {
  	this.listePalavra();
  	this.listeAras();
  }

  listePalavra(){
  	this.palavraServe.listar('')
  		.subscribe(dados => this.palavras = dados);
  }

  listeAras( ){
  	this.areaServe.listar('')
  		.subscribe(dados => this.areas = dados);
  }
}
