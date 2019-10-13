import { Component, OnInit } from '@angular/core';

import { PalavraService } from '../../servisos/palavra.service';

@Component({
  selector: 'app-buscar-palavra',
  templateUrl: './buscar-palavra.component.html',
  styleUrls: ['./buscar-palavra.component.css']
})
export class BuscarPalavraComponent implements OnInit {

	palavras ; 

	valorBuscado  = ''

  constructor(private palavraServe: PalavraService) { }

  ngOnInit() {
  	this.buscarPalavra();
  }

  listeP(palavra ){
  	this.palavraServe.listar(palavra)
  		.subscribe(dados => this.palavras = dados);
  }

  buscarPalavra(){
  	this.listeP(this.valorBuscado);
  }

}
