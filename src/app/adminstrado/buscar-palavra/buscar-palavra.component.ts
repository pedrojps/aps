import { Component, OnInit } from '@angular/core';

import { PalavraService } from '../../servisos/palavra.service';

@Component({
  selector: 'app-buscar-palavra',
  templateUrl: './buscar-palavra.component.html',
  styleUrls: ['./buscar-palavra.component.css']
})
export class BuscarPalavraComponent implements OnInit {

	palavras : Arry<any>; 

	valorBuscado : string = ''

  constructor(private palavraServe: PalavraService) { }

  ngOnInit() {
  	this.buscarPalavra();
  }

  listeP(palavra : string){
  	this.palavraServe.listar(palavra)
  		.subscribe(dados => this.palavras = dados);
  }

  buscarPalavra(){
  	this.listeP(this.valorBuscado);
  }

}
