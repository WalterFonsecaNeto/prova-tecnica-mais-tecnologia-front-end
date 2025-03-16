import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faRightToBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  imports: [FontAwesomeModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  faRightToBracket = faRightToBracket;

}
