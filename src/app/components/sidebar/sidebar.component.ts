import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faUser, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  faHouse = faHouse;
  faUser = faUser;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  sidbarFechado = false;

  alterarEstadoSidebar() {
    this.sidbarFechado = !this.sidbarFechado;
  }
}