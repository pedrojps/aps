import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../servisos/auth.service';
import { Usuario } from '../../usuario';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

	private user : Usuario  = new Usuario();
	
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

	realizarLogin(){
  	this.authService.fazerLoginUsuario(this.user);
  }
}
