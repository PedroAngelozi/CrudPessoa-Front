import { Injectable } from '@angular/core';

import { Pessoa } from 'src/app/shared/models/pessoa.model';

const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodos(): Pessoa[] {
    const pessoas = localStorage[LS_CHAVE];
    //Caso não possua nada a lista, a chave sinalizara com undefined
    return pessoas ? JSON.parse(pessoas) : [];

  }

  inserir(pessoa: Pessoa): void {
    //Obtem a lita de pessoas completas 
    const pessoas = this.listarTodos();

    //Seta um id único 
    //Para não precisar ser gerenciado, sera usado timestap 
    //Quantidade de segundos desde 1970
    pessoa.id = new Date().getTime();
    
    //Sempre adicionar no final da lista
    pessoas.push(pessoa);

    //Armazena no local Storage 
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

 buscarPorId(id: number): Pessoa | undefined {
  //Obtem a lista completa de pessoas 
  const pessoas: Pessoa[] = this.listarTodos();

  //Efetua a busca 
  //find() : retorna o primeiro elemento da lista que satisfaz a condição
  //Caso contrario undefined
  return pessoas.find(pessoa => pessoa.id === id);
 }

 atualizar(pessoa: Pessoa): void{
  //Obtem a lista completa de pessoas 
  const pessoas: Pessoa[] = this.listarTodos();

  //"Varre" a lista de pessoas 
  //Quando encontra alguem com o msm id altera a lista 
  pessoas.forEach( (obj, index, objs) => {
    if(pessoa.id === obj.id) {
      objs[index] = pessoa
    }
  });
 
  //Armazena a nova lista no Local Storage
  localStorage[LS_CHAVE] = JSON.stringify(pessoas);
}

  remover(id: number): void {
    //Obtem a lista completa de pessoas 
    //Feito com let para poder ser manipulada 
    let pessoas: Pessoa[] = this.listarTodos();

    //filter(): Retorna a msm lista, com os registros que 
    //          satisfazem as condições, isto é caso o id 
    //          seja diferente do que o passado na função!

    pessoas = pessoas.filter(pessoa => pessoa.id !== id);

    //Atualiza a lista de pessoa
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }
}
