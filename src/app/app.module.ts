import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PessoaModule } from './pessoa/pessoa.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PessoaService } from './pessoa/services/pessoa.service';
import { NumericoDirective } from './shared/directives/numerico.directive';
import { SharedModule } from './shared';

import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule,
    SharedModule,
    AuthModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
