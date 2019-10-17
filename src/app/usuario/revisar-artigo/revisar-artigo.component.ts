import { Component, OnInit } from '@angular/core';

import { ArtigoService } from '../../servisos/artigo.service';
import { AuthService } from '../../servisos/auth.service';

@Component({
  selector: 'app-revisar-artigo',
  templateUrl: './revisar-artigo.component.html',
  styleUrls: ['./revisar-artigo.component.css']
})
export class RevisarArtigoComponent implements OnInit {

	artigosEmRevisao=[];
	artigosIndicados=[];
	artigosRevisados=[];
	user;
  constructor(
  	private authserve:AuthService,
	private artigoServe : ArtigoService ) { }

  ngOnInit() {
  	this.user = this.authserve.getUsuario();
  	this.getArtigos(this.user.id);
  }


  getArtigos(id){
		this.artigoServe.listarByRevisor(id).subscribe(dados=> this.serpara(dados));
	}

	serpara(dados){
		var em=[];
		var ind= [];
		var revi= [];
		dados.forEach(function (item, indice, array) {
			if(item.status == "Em Revisão"){
				em.push(item);
			}else if (item.status == "aguardando"){
				ind.push(item);
			}else{
				revi.push(item);
			}
		});

		this.artigosEmRevisao = em;
		this.artigosIndicados = ind;
		this.artigosRevisados = revi;
	}

	aceita(item){
		item.status = "Em Revisão";
		this.artigoServe.update(item).subscribe(
			success => {
            alert('Você aceito revisar uma artigo novo');
            this.artigosIndicados.splice(this.artigosIndicados.indexOf(item),1);
			this.artigosEmRevisao.push(item);
          	},error=> alert('Não e possivel aceita artigo novo para revisar'));
	}
}
