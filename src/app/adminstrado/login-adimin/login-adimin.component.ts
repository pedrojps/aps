import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../servisos/auth.service';
import { Usuario } from '../../usuario';

@Component({
  selector: 'app-login-adimin',
  templateUrl: './login-adimin.component.html',
  styleUrls: ['./login-adimin.component.css']
})
export class LoginAdiminComponent implements OnInit {

	private user : Usuario  = new Usuario();

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }


  realizarLogin(){
  	this.authService.fazerLoginAdmin(this.user);
  }
}
