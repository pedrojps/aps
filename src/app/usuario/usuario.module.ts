import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginUserComponent } from './login-user/login-user.component';
import { routing } from '../app.routing';

@NgModule({
  declarations: [
  LoginUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    routing
  ]
})
export class UsuarioModule { }
