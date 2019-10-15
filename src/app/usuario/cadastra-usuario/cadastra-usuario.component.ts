import { Component, OnInit } from '@angular/core';

import { UsuarioCadastro } from '../../usuario-cadastro';
import { Usuario } from '../../usuario';
import { AreaService } from '../../servisos/area.service';
import { UsuarioService } from '../../servisos/usuario.service';
import { AuthService } from '../../servisos/auth.service';

@Component({
  selector: 'app-cadastra-usuario',
  templateUrl: './cadastra-usuario.component.html',
  styleUrls: ['./cadastra-usuario.component.css']
})
export class CadastraUsuarioComponent implements OnInit {

  novo :UsuarioCadastro = new UsuarioCadastro();
	areas;
  constructor(private areaServe: AreaService,private userServe: UsuarioService,private authserve:AuthService) { }

  ngOnInit() {
  	this.novo.id_area='-1';
  	this.novo.tipo='-1';
  	this.listeAras( );
  }

  veritique(){
  	if(this.novo.nome.length<4){
  		alert('Nome tem que ter pelo menos 3 digitos')
  		return false;
  	}
  	if(this.novo.senha.length<3){
  		alert('senha tem que ter pelo menos 3 digitos')
  		return false;
  	}
  	if(this.novo.email.length<4){
  		alert('email tem que ter pelo menos 3 digitos')
  		return false;
  	}
  	if(this.novo.tipo=='-1'){
  		alert('selecione um tipo')
  		return false;
  	}
  	if(this.novo.tipo=='0'){
  		if(this.novo.matricula.length==0){
  			alert('digite sua matricula')
  			return false;
  		}
  	}
  	if(this.novo.tipo=='1'){
  		if(this.novo.titulacao.length<4){
  			alert('titulação tem que ter pelo menos 3 digitos')
  			return false;
  		}
  		if(this.novo.tipo=="-1"){
  			alert('selecione uma area')
  			return false;
  		}
  	}
  	return true

  }

	listeAras( ){
  	this.areaServe.listar('')
  		.subscribe(dados => this.areas = dados);
  }

  criarUsuario(){
  	this.veritique();
  	if(this.novo.tipo=='1'){
  		this.novo.matricula=null;
  	}
  	if(this.novo.tipo=='0'){
  		this.novo.titulacao=null;
  		this.novo.id_area=null;
  	}
  	this.userServe.cria(this.novo).subscribe(
  		success => {
  			alert('usuario cadastrada com susseço');
  			var tes = new Usuario();
  			tes.nome = this.novo.email;
  			tes.senha = this.novo.senha;
  			this.authserve.fazerLoginUsuario(tes);
  		},
  		error=> alert('Não pode ser cadastrado não pode ser cadastrada')
  	);
  }
}
