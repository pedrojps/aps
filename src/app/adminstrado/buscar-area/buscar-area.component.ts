import { Component, OnInit } from '@angular/core';

import { AreaService } from '../../servisos/area.service';

@Component({
  selector: 'app-buscar-area',
  templateUrl: './buscar-area.component.html',
  styleUrls: ['./buscar-area.component.css']
})
export class BuscarAreaComponent implements OnInit {

  	areas ; 

	valorBuscado = ''

  constructor(private areaServe: AreaService) { }

  ngOnInit() {
  	this.buscar();
  }

  liste(nome ){
  	this.areaServe.listar(nome)
  		.subscribe(dados => this.areas = dados);
  }

  buscar(){
  	this.liste(this.valorBuscado);
  }

}
