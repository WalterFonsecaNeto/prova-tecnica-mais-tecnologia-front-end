import { Component,OnInit } from '@angular/core';
import { TopbarComponent } from "../topbar/topbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CardPessoaComponent } from "../card-pessoa/card-pessoa.component";
import { PessoaApiService } from '../../services/pessoa-api.service';

@Component({
  selector: 'app-pessoa',
  imports: [TopbarComponent, SidebarComponent, CardPessoaComponent],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css'
})
export class PessoaComponent implements OnInit  {
  constructor(
    private pessoaApi: PessoaApiService
  ) { }
  pessoas: any[] = [];

  ngOnInit(): void {
    this.buscarPessoa();
  }


  async buscarPessoa(){
    this.pessoas = await this.pessoaApi.buscarPessoas();
    console.log(this.pessoas);
  }


}
