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

  delete(item){
    console.log(item);
    this.areaServe.getEventoByArea(item.id).subscribe( dados=>{
      console.log(dados);
      if(dados.length==0){
        this.areaServe.deleta(item.id)
        .subscribe(
          success => {
            alert('O Área Excluida');
            document.getElementById('area-'+item.id).remove();
          },
            error=> alert('O Área Não pode ser excluirdo Excluida')
          );
      }else alert('O Àrea Não pode ser excluirdo Excluida há eventos com essa área');
    });
    
  }
}
