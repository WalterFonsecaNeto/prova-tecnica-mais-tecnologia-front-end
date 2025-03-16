import { Component } from '@angular/core';
import { TopbarComponent } from "../topbar/topbar.component";
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tela-inicial',
  imports: [TopbarComponent, FontAwesomeModule],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent {
  constructor(private router: Router) {}
  faArrowRight = faArrowRight;

  Entrar(){
    this.router.navigate(['/home']);
  }
}
