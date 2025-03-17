import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { TopbarComponent } from '../topbar/topbar.component';
import { FormsModule } from '@angular/forms';
import { PessoaApiService } from '../../services/pessoa-api.service';

@Component({
  selector: 'app-editar-pessoa',
  imports: [TopbarComponent, FormsModule],
  templateUrl: './editar-pessoa.component.html',
  styleUrl: './editar-pessoa.component.css',
})
export class EditarPessoaComponent implements OnInit {
  constructor(
    private pessoaApi: PessoaApiService,
    private route: ActivatedRoute,
    private router : Router
  ) {}
  pessoaId!: number;
  nome = '';
  email = '';
  telefone = '';
  dataNacimento!: Date;
  endereco = '';
  pessoa: any;

  ngOnInit(): void {
    this.BuscarPessoa();
  }

  async BuscarPessoa() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pessoa = await this.pessoaApi
        .buscarPessoasPorId(id)
        .then((response) => {
          this.pessoaId =  response.id
          this.nome = response.nome;
          this.email = response.email;
          this.telefone = response.telefone;
          this.dataNacimento = response.dataNascimento;
          this.endereco = response.endereco;
        });
       
    }
  }

  async AtualizarPessoa() {
    const pessoaAtualizar = {
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      dataNascimento: this.dataNacimento,
      endereco: this.endereco,
    };
    const deuCerto = await this.pessoaApi.atualizarPessoa(this.pessoaId, pessoaAtualizar);

    if (deuCerto) {
      this.router.navigate(['/pessoa']);
    } else {
      alert('Não foi possível atualizar a pessoa.');
    }
  }
}
