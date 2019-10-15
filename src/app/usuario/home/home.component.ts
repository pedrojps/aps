import { Component, OnInit } from '@angular/core';

import { EventoService } from '../../servisos/evento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	eventos;

  constructor(private eventoServe: EventoService) { }

  ngOnInit() {
  	this.liste();
  }

  liste(){
  	this.eventoServe.listar("")
  		.subscribe(dados => {
        this.eventos = this.filtroSituacao(this.filtroPalavra(dados));
      });
  }

  filtroPalavra(dados){
  	console.log(dados)
  	var list=[];
  	for (var i = 4; i >= 0; i--) {
  		var e = dados.pop();
  		if(e!=null)
  			list.push(e);
  	}
  	return list;
  }

  filtroSituacao( dados){

          var e = new Array();
          var data = new Date();
          dados.forEach( function (item, indice, array){
			var situ = false;
			if(new Date(item.inicio_submicao) > data)
			situ = false;
			else if(new Date(item.fim_submissao) < data)
			situ = false;
			else situ = true;

			item.situ = situ;
			e.push(item);
			console.log(item);
          })
          return e;
     
  }

}
