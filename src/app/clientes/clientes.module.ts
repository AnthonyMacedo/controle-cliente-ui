import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { ClientesPesquisaComponent } from './clientes-pesquisa/clientes-pesquisa.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { ClientesRoutingModule } from './clientes-routing.module';
import { SharedModule } from '../shared/shared.module';
import {DialogModule} from 'primeng/dialog';
import { GoogleMapsModule } from '@angular/google-maps';
import { AutoCompleteModule } from 'primeng/autocomplete';



@NgModule({
  declarations: [
    ClientesCadastroComponent,
    ClientesPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule,
    InputMaskModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    ToolbarModule,
    DialogModule,
    AutoCompleteModule,
    GoogleMapsModule,

    ClientesRoutingModule,
    SharedModule
  ],
  exports: [
    ClientesCadastroComponent,
    ClientesPesquisaComponent
  ]
})
export class ClientesModule { }
