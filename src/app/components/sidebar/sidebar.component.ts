import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faUser, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  faHouse = faHouse;
  faUser = faUser;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  sidbarFechado = false; 

  ngOnInit() {
    // Recupera o estado da sidebar do localStorage ao inicializar o componente
    const estadoSalvo = localStorage.getItem('sidbarFechado');
    if (estadoSalvo !== null) {
      this.sidbarFechado = JSON.parse(estadoSalvo); // Converte de string para boolean
    }
  }

  alterarEstadoSidebar() {
    this.sidbarFechado = !this.sidbarFechado; // Alterna o estado

    // Salva o estado no localStorage
    localStorage.setItem('sidbarFechado', JSON.stringify(this.sidbarFechado));
  }

  
}