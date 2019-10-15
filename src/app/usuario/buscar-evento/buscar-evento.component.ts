import { Component, OnInit } from '@angular/core';

import { EventoService } from '../../servisos/evento.service';

@Component({
  selector: 'app-buscar-evento',
  templateUrl: './buscar-evento.component.html',
  styleUrls: ['./buscar-evento.component.css']
})
export class BuscarUserEventoComponent implements OnInit {

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
        this.eventos = this.filtroSituacao(this.situacao,this.eventos);
        this.eventos=this.setSituacao(this.eventos);
      });
  }

  filtroSituacao(situacao, dados){
    if(situacao!="-1"){
          var e = new Array();
          var data = new Date();
          dados.forEach( function (item, indice, array){
              var situ = '';
              if(new Date(item.inicio_submicao) > data)
                situ = '0';
              else if(new Date(item.fim_submissao) < data)
                situ = '2';
              else situ = '1';

              if(situ == situacao){
                e.push(item);
              }
          })
          return e;
     }
     return dados;
  }

  setSituacao( dados){

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
        this.palavras = p;
        console.log(this.palavras);
      });
  }

  delete(item){
    console.log(item);
    this.eventoServe.listeArtigos(item.id).subscribe( dados=>{
      if(dados.length==0){
        this.eventoServe.deleta(item.id)
        .subscribe(
          success => {
            this.eventoServe.deletaPalavra(item.id).subscribe();
            alert('O Evento Excluido');
            document.getElementById('evento-'+item.id).remove();
          },
            error=> alert('O Evento Não pode ser excluirdo Excluido')
          );
      }else alert('O Evento Não pode ser excluirdo Excluido');
    });
    
  }

  buscar(){
  	this.liste(this.valorBuscado);
  }


}
