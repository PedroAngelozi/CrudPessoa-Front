import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { PessoaService } from './services/pessoa.service';
import { NgxMaskModule } from 'ngx-mask';
import { IConfig } from 'ngx-mask';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { ModalPessoaComponent } from './modal-pessoa/modal-pessoa.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {}


@NgModule({
  declarations: [
    ListarPessoaComponent,
    EditarPessoaComponent,
    InserirPessoaComponent,
    ModalPessoaComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    PessoaService
  ]
})

export class PessoaModule {
 }

