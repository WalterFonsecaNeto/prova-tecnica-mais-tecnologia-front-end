import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faBirthdayCake, faMapMarkerAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card-pessoa',
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './card-pessoa.component.html',
  styleUrl: './card-pessoa.component.css'
})
export class CardPessoaComponent {
  constructor(private router: Router) {}

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faBirthdayCake = faBirthdayCake;
  faMapMarkerAlt = faMapMarkerAlt;
  faPencilAlt = faPencilAlt;

  @Input() pessoa: any;

  EditarPessoa(pessoa: any) {
    if (this.pessoa?.id) {
      this.router.navigate(['/pessoa/editar', pessoa.id]);
    }
  }

  

}
