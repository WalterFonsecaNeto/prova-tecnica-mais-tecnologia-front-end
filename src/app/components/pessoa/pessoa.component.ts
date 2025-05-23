import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { TopbarComponent } from "../topbar/topbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CardPessoaComponent } from "../card-pessoa/card-pessoa.component";
import { PessoaApiService } from '../../services/pessoa-api.service';

@Component({
  selector: 'app-pessoa',
  imports: [
    FormsModule,
    TopbarComponent,
    SidebarComponent,
    CardPessoaComponent,
  ],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css'
})
export class PessoaComponent implements OnInit {
  
  constructor(private pessoaApi: PessoaApiService) {}

  pessoas: any[] = [];
  nomeFiltro: string = "";
  emailFiltro: string = "";

  ngOnInit(): void {
    this.buscarPessoa();
  }

  
  get pessoasFiltradas() {
    return this.pessoas.filter(pessoa => 
      pessoa.nome.toLowerCase().startsWith(this.nomeFiltro.toLowerCase()) &&
      pessoa.email.toLowerCase().startsWith(this.emailFiltro.toLowerCase())
    );
  }
  
  

  async buscarPessoa() {
    this.pessoas = await this.pessoaApi.buscarPessoas();
  }
}
