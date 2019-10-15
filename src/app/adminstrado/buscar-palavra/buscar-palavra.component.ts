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

  delete(item){
    console.log(item);
    this.palavraServe.getEventoBypalavarId(item.id).subscribe( dados=>{
      console.log(dados);
      if(dados.length==0){
        this.palavraServe.deleta(item.id)
        .subscribe(
          success => {
            alert('O Palavra Excluida');
            document.getElementById('pala-'+item.id).remove();
          },
            error=> alert('O Palavra Não pode ser excluirdo Excluida')
          );
      }else alert('O Palavra Não pode ser excluirdo Excluida há eventos com essa área');
    });
    
  }
}
