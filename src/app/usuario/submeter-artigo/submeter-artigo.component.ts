import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } 	 from '@angular/router';
import { Location } 	 from '@angular/common';

import { EventoService } from '../../servisos/evento.service';
import { ArtigoService } from '../../servisos/artigo.service';
import { AuthService } from '../../servisos/auth.service';
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

	file: File;
	autor: Autore = new Autore();
	user;

  	constructor(
  	private eventoServe: EventoService,
	private artigoServe : ArtigoService ,
  	private route:ActivatedRoute,
  	private authserve:AuthService,
  	private location: Location) { 
  		this.id = this.route.snapshot.params['id'];

	}

	ngOnInit() {
		this.user = this.authserve.getUsuario();
		console.log(this.authserve.getUsuario());
		this.id = this.route.snapshot.params['id'];
		this.artigo.autor=this.authserve.getUsuario().id;
		this.artigo.status= "aguardando";
		this.getEvento(this.id);
	}

  	getEvento(id){
		this.eventoServe.getEvento(id).subscribe(
			dados=> {
				this.evento = dados;
				this.artigo.evento_id=this.evento.id;
			}
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

	vealide(){
  		if(this.artigo.titulo.length<3){
  			alert('Titulo tem que ter pelo menos 3 digitos')
  			return false;
  		}
  		if(this.artigo.resumo.length<3){
  			alert('Resumo tem que ter pelo menos 3 digitos')
  			return false;
  		}
  		if(!(this.file) || this.file.size==0){
  			alert('Selecione um arquivo')
  			return false;
  		}
  		return true;
	}

	criarUsuario(){
		console.log(this.artigo);
		if(this.vealide()){
			this.artigoServe.upload(this.file,this.artigo)
			.subscribe(dados=>{
				if(dados.length!=0){
					this.autores.forEach(function (item, indice, array){
						item.artigo_id=dados[0];
					})
					this.artigoServe.uploadAutores(this.autores).subscribe();
					alert("Artigo submetido com sucesso")
					this.location.back();
				}
			});
		}

	}

	cancela(){
  		this.location.back();
  	}

}
