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


  chekboxObserve(e){
  	if(e.target.checked){
  		this.palavrasSelct.push(e.target.value);
  	}else{
  		this.palavrasSelct.splice(this.palavrasSelct.indexOf(e.target.value));
  	}
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
