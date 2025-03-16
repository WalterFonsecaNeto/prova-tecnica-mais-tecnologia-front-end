import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';

export const routes: Routes = [
  {
    path: '',
    component: TelaInicialComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pessoa',
    component: PessoaComponent,
  },
];
