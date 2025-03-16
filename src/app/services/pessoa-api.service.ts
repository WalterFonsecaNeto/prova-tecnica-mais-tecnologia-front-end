import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaApiService {

  constructor() { }

  async buscarPessoas() {
    try {
      const response = await fetch('http://localhost:5223/pessoa/listar');
      if (!response.ok) {
        throw new Error(`Erro ao listar pessoas: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar pessoas:', error);
      return []; // Retorna uma lista vazia em caso de erro
    }
  }

}
