import { Component } from '@angular/core';
import { ErrorHandlerService } from '../error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  exibirMenu = true;

  ngOnInit() {
  }

  toggleMenu(){
    this.exibirMenu = !this.exibirMenu;
  }

  usuarioLogado = '';

  constructor(
    private errorHandler: ErrorHandlerService,
    private router: Router
    ) { }

}
