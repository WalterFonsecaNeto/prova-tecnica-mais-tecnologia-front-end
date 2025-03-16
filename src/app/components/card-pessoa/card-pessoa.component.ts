import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pessoa',
  imports: [],
  templateUrl: './card-pessoa.component.html',
  styleUrl: './card-pessoa.component.css'
})
export class CardPessoaComponent {

  @Input() pessoa: any;

}
