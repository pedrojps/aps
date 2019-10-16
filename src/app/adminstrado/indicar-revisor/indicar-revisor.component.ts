import { Component, OnInit } from '@angular/core';

import { ArtigoService } from '../../servisos/artigo.service';

@Component({
  selector: 'app-indicar-revisor',
  templateUrl: './indicar-revisor.component.html',
  styleUrls: ['./indicar-revisor.component.css']
})
export class IndicarRevisorComponent implements OnInit {

	artigos;
	valorBuscado;
  constructor(
	private artigoServe : ArtigoService ) { }

  ngOnInit() {
  this.getArtigos('');
  }

  buscar(){
  	this.getArtigos(this.valorBuscado);
  }
  getArtigos(busca){
		this.artigoServe.buscar(busca).subscribe(dados=> {
			this.artigos = dados;
			this.artigos.forEach(function (item, indice, array) {
                if(item.revisor_nome==null)
                	item.revisor_nome = " ";
              });
		});
	}

}
