import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserauthRoutingModule } from './userauth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';
import { OtpComponent } from './otp/otp.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    UserauthRoutingModule
  ]
})
export class UserauthModule { }
