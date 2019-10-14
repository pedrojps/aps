import { Component, OnInit } from '@angular/core';

import { EventoService } from '../../servisos/evento.service';


@Component({
  selector: 'app-buscar-evento',
  templateUrl: './buscar-evento.component.html',
  styleUrls: ['./buscar-evento.component.css']
})
export class BuscarEventoComponent implements OnInit {

	eventos ; 

  palavrasByevento; 

  palavras;

	valorBuscado = '';

  palavraSelect="-1";

  situacao='-1';

  constructor(private eventoServe: EventoService) { }

  ngOnInit() {
  	this.buscar();
    this.listePalavrasByEvento();
  }

  liste(nome ){
  	this.eventoServe.listar(nome)
  		.subscribe(dados => {
        this.eventos = this.filtroPalavra(this.palavraSelect,dados);
      });
  }

  filtroPalavra(palavra,dados){
    if(palavra!="-1"){
          var idsE = this.ListEventosComPalavra(palavra);
          var e = new Array();
          dados.forEach( function (item, indice, array){
               if(idsE.indexOf(item.id) != -1){
                e.push(item);
              }
          })
          return e;
     }
     return dados;
  }

  ListEventosComPalavra(ser){
    var p = new Array();
    this.palavrasByevento.forEach( function (item, indice, array){
           if(item.palavra_chave_id == ser){
            p.push(item.evento_id);
          }
      })
    console.log(p);
    return p;
  }

  listePalavrasByEvento(){
    this.eventoServe.listarPalavrasByEvento()
      .subscribe(dados => {
        this.palavrasByevento = dados;
        var p = new Array();
        var id = new Array();
        dados.forEach( function (item, indice, array){
             if(id.indexOf(item.id)==-1){
              p.push({id : item.id, palavra: item.palavra});
              id.push(item.id);
            }
        })
        this.palavras = this.lispaPalavras(p);
        console.log(this.palavras);
      });
  }

  lispaPalavras(p){
    console.log(p);
    return p;
  }

  buscar(){
  	this.liste(this.valorBuscado);
  }

}
