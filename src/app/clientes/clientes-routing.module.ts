import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesCadastroComponent } from "./clientes-cadastro/clientes-cadastro.component";
import { ClientesPesquisaComponent } from "./clientes-pesquisa/clientes-pesquisa.component";

const routes: Routes = [
  {
    path: 'clientes', component: ClientesPesquisaComponent,
  },
  {
    path: 'clientes/novo', component: ClientesCadastroComponent,
  },
  {
    path: 'clientes/:id', component: ClientesCadastroComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
