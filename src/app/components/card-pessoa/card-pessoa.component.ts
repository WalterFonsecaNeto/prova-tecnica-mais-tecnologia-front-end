import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faBirthdayCake, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card-pessoa',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card-pessoa.component.html',
  styleUrl: './card-pessoa.component.css'
})
export class CardPessoaComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faBirthdayCake = faBirthdayCake;
  faMapMarkerAlt = faMapMarkerAlt;

  @Input() pessoa: any;

}
