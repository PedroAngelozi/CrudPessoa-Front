import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PessoaModule } from './pessoa/pessoa.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PessoaService } from './pessoa/services/pessoa.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule

  ],
  providers: [
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
