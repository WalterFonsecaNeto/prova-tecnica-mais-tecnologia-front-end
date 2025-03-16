import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  imports: [FontAwesomeModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  constructor(private router: Router) {}

  faRightToBracket = faRightToBracket;

  get telaInicial(): boolean {
    return this.router.url === '/';
  }
  Sair() {
    this.router.navigate(['/']);
  }


  
}
