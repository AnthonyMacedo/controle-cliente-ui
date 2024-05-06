import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { EnderecoCadastroComponent } from './enderecos/endereco-cadastro/endereco-cadastro.component';
import { EnderecoPesquisaComponent } from './enderecos/endereco-pesquisa/endereco-pesquisa.component';


@NgModule({
  declarations: [
    AppComponent,
    EnderecoCadastroComponent,
    EnderecoPesquisaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CoreModule,
    ClientesModule,

    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


