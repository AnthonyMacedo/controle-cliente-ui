import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Cliente } from 'src/app/core/model';
import { ClienteFiltro, ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-pesquisa',
  templateUrl: './clientes-pesquisa.component.html',
  styleUrls: ['./clientes-pesquisa.component.css']
})
export class ClientesPesquisaComponent {

  cliente = new Cliente();
  totalRegistros: number = 0;
  filtro = new ClienteFiltro()
  clientes: Cliente[] = [];
  @ViewChild('tabela') grid!: any;

  constructor(
    private clienteService: ClientesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de clientes');
    this.pesquisar(this.filtro.pagina);
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

  pesquisar(pagina: number = 0): void {

    this.filtro.pagina = pagina;

    this.clienteService.listarTodos(this.filtro).then((retorno: any) => {
      this.clientes =  retorno.clientes;

      this.totalRegistros = retorno.total;
    });
  }

  // pesquisar(pagina: number = 0): void {

  //   this.filtro.pagina = pagina;

  //   this.ClienteService.pesquisar(this.filtro)
  //     .then((resultado: any) => {
  //       this.Clientes = resultado.Clientes;
  //       this.totalRegistros = resultado.total;
  //     });
  // }

  // listarTodos(): void {
  //   this.ClienteService.listarTodas();
  // }

  // aoMudarPagina(event: LazyLoadEvent) {
  //   const pagina = event!.first! / event!.rows!;
  //   this.pesquisar(pagina);
  // }

  // confirmarExclusao(Cliente: any): void {
  //   this.confirmationService.confirm({
  //     message: 'Tem certeza que deseja excluir?',
  //     accept: () => {
  //       this.excluir(Cliente);
  //     }
  //   });
  // }

  // excluir(id: number) {
  //   this.ClienteService.excluir(id).then(() => {
  //     this.grid.reset();

  //     this.messageService.add({ severity: 'success', summary: 'Aviso', detail: 'Cliente excluída com sucesso' });
  //   })
  //     .catch(erro => this.errorHandler.handle(erro));
  // }

  // alterarStatus(Cliente: any) {
  //   const novoStatus = !Cliente.ativo;

  //   this.ClienteService.alterarStatus(Cliente.id, novoStatus)
  //     .then(() => {
  //       const acao = novoStatus ? 'ativada' : 'desativada';

  //       Cliente.ativo = novoStatus;
  //       this.messageService.add({ severity: 'success', detail: `Cliente ${acao} com sucesso!` });
  //     })
  //     .catch(erro => this.errorHandler.handle(erro));
  // }

}
