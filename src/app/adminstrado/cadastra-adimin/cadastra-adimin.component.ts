import { Component, OnInit } from '@angular/core';


import { UsuarioService } from '../../servisos/usuario.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-cadastra-adimin',
  templateUrl: './cadastra-adimin.component.html',
  styleUrls: ['./cadastra-adimin.component.css']
})
export class CadastraAdiminComponent implements OnInit {

  novo :Admin = new Admin();

  constructor(private userServe: UsuarioService) { }

  ngOnInit() {
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
  	return true

  }


  criarUsuario(){
  	this.userServe.criaAdmin(this.novo).subscribe(
  		success => {
  			alert('Administrador cadastrada com sucesso');
  			this.novo = new Admin();
  		},
  		error=> alert('Não pode ser cadastrado não pode ser cadastrada')
  	);
  }

}
