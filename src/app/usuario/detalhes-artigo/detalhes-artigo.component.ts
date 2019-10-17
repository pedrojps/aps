import { Component, OnInit } from '@angular/core';
import { Location } 	 from '@angular/common';
import { ActivatedRoute } 	 from '@angular/router';

import { ArtigoService } from '../../servisos/artigo.service';

@Component({
  selector: 'app-detalhes-artigo',
  templateUrl: './detalhes-artigo.component.html',
  styleUrls: ['./detalhes-artigo.component.css']
})
export class DetalhesArtigoComponent implements OnInit {

	id;

	artigo;

  constructor(
  		private location: Location,
		private route:ActivatedRoute,private artigoServe : ArtigoService ) { }

  ngOnInit() {
 	this.id = this.route.snapshot.params['id'];
 	this.getArtigo();
  }

	cancela(){
  		this.location.back();
  	}

  getArtigo(){
  	this.artigoServe.getArtigo(this.id).subscribe(dados=> this.artigo = dados);
  }

  finalizarRevição(item){
		this.artigoServe.update(item).subscribe(
			success => {
            alert('Revição do artigo finalizada');
            this.location.back();
          	},error=> alert('Não foi possivel finalizar a revição do artigo'));
	}


	aceito(){
		this.artigo.status = "Aceito";
		this.finalizarRevição(this.artigo);
	}

	rejeitado(){
		this.artigo.status = "Rejeitado";
		this.finalizarRevição(this.artigo);
	}
}
