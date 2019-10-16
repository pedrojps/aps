import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } 	 from '@angular/router';
import { Location } 	 from '@angular/common';

import { EventoService } from '../../servisos/evento.service';
import { ArtigoSub } from '../../artigo-submit';
import { Evento } from '../../evento';
import { Autore } from '../../autores';

@Component({
  selector: 'app-submeter-artigo',
  templateUrl: './submeter-artigo.component.html',
  styleUrls: ['./submeter-artigo.component.css']
})
export class SubmeterArtigoComponent implements OnInit {

	id;

	evento:Evento = new Evento();

	artigo:ArtigoSub = new ArtigoSub();

	autores : Autore[]=[];

	file: file;
	autor: Autore = new Autore();

  	constructor(
  	private eventoServe: EventoService,
  	private route:ActivatedRoute) { 
  		this.id = this.route.snapshot.params['id'];

	}

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		this.getEvento(this.id);
	}

  	getEvento(id){
		this.eventoServe.getEvento(id).subscribe(
			dados=> this.evento = dados
			);
	}

	adicinarAutor(){
		if(this.autor.nome.length!=0 && this.autor.email.length!=0 ){
			this.autores.push(this.autor);
			this.autor = new Autore();
		}else
			alert("preemcha os campos de nome e email")
	}

	removerAutor(item){
		var index = this.autores.indexOf(item);
		if (index !== -1) this.autores.splice(index, 1);

		console.log(this.autores);
	}

	onChange(evento){

		console.log(evento);
		const selectFile = <FileList>evento.srcElement.files;

		document.getElementById("arquivo").innerHTML = selectFile[0].name;

		this.file = selectFile[0];
		console.log(this.file);
	}
}
