import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesCadastroComponent } from "../clientes/clientes-cadastro/clientes-cadastro.component";
import { ClientesPesquisaComponent } from "../clientes/clientes-pesquisa/clientes-pesquisa.component";


const routes: Routes = [
  {
    path: 'enderecos', component: ClientesPesquisaComponent,
  },
  {
    path: 'enderecos/novo', component: ClientesCadastroComponent,
  },
  {
    path: 'enderecos/:id', component: ClientesCadastroComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EnderecosRoutingModule { }
