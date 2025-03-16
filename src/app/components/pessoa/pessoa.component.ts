import { Component } from '@angular/core';
import { TopbarComponent } from "../topbar/topbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-pessoa',
  imports: [TopbarComponent, SidebarComponent],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css'
})
export class PessoaComponent {

}
