import { Component, OnInit } from '@angular/core';

import { ArtigoService } from '../../servisos/artigo.service';
import { AuthService } from '../../servisos/auth.service';

@Component({
  selector: 'app-visualizar-artigos',
  templateUrl: './visualizar-artigos.component.html',
  styleUrls: ['./visualizar-artigos.component.css']
})
export class VisualizarArtigosComponent implements OnInit {

	artigos;

	user;
  constructor(
  	private authserve:AuthService,
	private artigoServe : ArtigoService ) { }

  ngOnInit() {
  	this.user = this.authserve.getUsuario();
  	this.getArtigos(this.user.id);
  }


  getArtigos(id){
		this.artigoServe.listarByUser(id).subscribe(dados=> this.artigos = dados);
	}

}
