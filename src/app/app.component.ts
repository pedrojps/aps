import { Component } from '@angular/core';

import { AuthService } from './servisos/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SSs';

  mostraMenuAdimin:boolean=false;

  constructor(private authService: AuthService){
  }

  ngOnInit(){
  	this.authService.mostaMenuAdiminEmitter.subscribe(
  		mostra => this.mostraMenuAdimin=mostra
  	);
  }
}
