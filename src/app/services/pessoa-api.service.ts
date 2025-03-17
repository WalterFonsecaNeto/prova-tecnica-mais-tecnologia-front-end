import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PessoaApiService {
  constructor() {}

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

  async buscarPessoasPorId(pessoaId: any) {
    try {
      const response = await fetch(
        `http://localhost:5223/pessoa/obterPorId/${pessoaId}`
      );
      if (!response.ok) {
        throw new Error(`Erro ao buscar pessoa por id: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar pessoas:', error);
    }
  }

  async atualizarPessoa(pessoaId: number, pessoa: any) {
    try {
  
      const response = await fetch(
        `http://localhost:5223/pessoa/atualizar/${pessoaId}`,
        {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(pessoa), 
        }
      );
  
      if (!response.ok) {
        throw new Error(`Erro ao atualizar pessoa: ${response.statusText}`);
      }
      return true; 
    } catch (error) {
      console.error('Erro ao atualizar pessoa:', error);
      return false; 
    }
  }
}
