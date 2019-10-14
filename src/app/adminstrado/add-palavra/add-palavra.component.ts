import { Component, OnInit } from '@angular/core';

import { PalavraService } from '../../servisos/palavra.service';

@Component({
  selector: 'app-add-palavra',
  templateUrl: './add-palavra.component.html',
  styleUrls: ['./add-palavra.component.css']
})
export class AddPalavraComponent  {

	palavra;

	mensagem;
  constructor(private palavraServe: PalavraService) { }

  ngOnInit() {
  }

  cria(palavra ){
  	if(this.palavra!=null){
	  	if(this.palavra.length > 3){
		  	var sub = {palavra: this.palavra};
		  	this.palavraServe.cria(sub).subscribe(
		  		success => {
		  			this.mensagem = 'palavra cadastrada com susseço';
		  			this.palavra='';
		  		},
		  		error=> this.mensagem = 'palavra não pode ser cadastrada'
		  		);
		  } else {
		  	this.mensagem = 'palavra cadastrada tem que ter mais de 3 digitos';
		  }
		}
	else{this.mensagem = 'campo vazio';}
	
  }
}
