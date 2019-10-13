import { Component, OnInit } from '@angular/core';

import { EventoService } from '../../servisos/evento.service';


@Component({
  selector: 'app-buscar-evento',
  templateUrl: './buscar-evento.component.html',
  styleUrls: ['./buscar-evento.component.css']
})
export class BuscarEventoComponent implements OnInit {

	eventos ; 

	valorBuscado = ''

  constructor(private eventoServe: EventoService) { }

  ngOnInit() {
  	this.buscar();
  }

  liste(nome ){
  	this.eventoServe.listar(nome)
  		.subscribe(dados => this.eventos = dados);
  }

  buscar(){
  	this.liste(this.valorBuscado);
  }

}
