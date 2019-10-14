import { Component, OnInit } from '@angular/core';

import { AreaService } from '../../servisos/area.service';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.css']
})
export class AddAreaComponent implements OnInit {

 	nome;

	mensagem;
  constructor(private areaServe: AreaService) { }

  ngOnInit() {
  }

  cria(nome ){
  	if(this.nome!=null){
	  	if(this.nome.length > 1){
		  	var sub = {area_de_pesquisa: this.nome};
		  	this.areaServe.cria(sub).subscribe(
		  		success => {
		  			this.mensagem = 'Àrea cadastrada com susseço';
		  			this.nome='';
		  		},
		  		error=> this.mensagem = 'Àrea não pode ser cadastrada'
		  		);
		  } else {
		  	this.mensagem = 'Àrea cadastrada tem que ter mais de 3 digitos';
		  }
		}
	else{this.mensagem = 'campo vazio';}
	
  }

}
