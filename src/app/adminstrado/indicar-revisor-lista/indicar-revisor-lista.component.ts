import { Component, OnInit } from '@angular/core';
import { Location } 	 from '@angular/common';
import { ActivatedRoute } 	 from '@angular/router';

import { UsuarioService } from '../../servisos/usuario.service';
import { ArtigoService } from '../../servisos/artigo.service';

@Component({
  selector: 'app-indicar-revisor-lista',
  templateUrl: './indicar-revisor-lista.component.html',
  styleUrls: ['./indicar-revisor-lista.component.css']
})
export class IndicarRevisorListaComponent implements OnInit {
	valorBuscado;
	idArtigo: string ='';
	artigo;
	professores;
  constructor(
  	private route:ActivatedRoute,private userServe: UsuarioService,
	private artigoServe : ArtigoService ,private location: Location ) { }

  ngOnInit() {
  	this.idArtigo = parseInt( this.route.snapshot.params['id']);
  	
  	this.getArtigo();

  	
  }

  getArtigo(){
  	this.artigoServe.getArtigo(this.idArtigo).subscribe(
  		dados=>{
  			this.artigo = dados;
  			this.getProfessore(this.artigo.area_de_pesquisa_id);
  		});
  }

  getProfessore(areaId){
  	this.userServe.getProfessores(areaId).subscribe(dados=> {
  		this.professores = this.filter(dados); 
  		console.log(dados)});
  }

  filter(dados){
  	var i = [];
  	var b2 = this.artigo.autor;
  	dados.forEach(function (item, indice, array) {
		if(item.id != b2 )
			i.push(item);
  	});
  	if(this.valorBuscado!=null){
  	  	var e = [];
  	  	var b = this.valorBuscado;
  	  	i.forEach(function (item, indice, array) {
  			if(item.nome.indexOf(b)>-1)
  				e.push(item);
  		});
  	
  		return e;
  	}
  	return i;
  }

  buscar(){
  	this.getProfessore(this.artigo.area_de_pesquisa_id)
  }

  indicar(id){
  	this.artigoServe.updateRevisor({artigo_id:this.artigo.id, revisor_id:  id }).subscribe(
  		success=>{
  		alert("indicado com sucesso");
  		this.location.back();
  	},error=>alert("não foi possivel indicar"));
  }

}
