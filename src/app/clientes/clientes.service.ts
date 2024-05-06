import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../core/model';
import { environment } from 'src/environments/environment';

export class ClienteFiltro {
  nome?: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  nome?: string;
  pagina: number = 0;
  itensPorPagina = 5;

  clientesUrl = `${environment.apiUrl}/api/v1/clientes`;

  constructor(
    private http: HttpClient
  ) { }

  adicionar(cliente: Cliente): Promise<Cliente> {
    const headers = new HttpHeaders()
      // .append('Authorization', 'Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu')
      .append('Content-Type', 'application/json');

    return this.http.post<Cliente>(this.clientesUrl, cliente, { headers })
      .toPromise()
      .then(response => response as Cliente);
  }

  // pesquisar(filtro: PessoaFiltro): Promise<any> {
  //   const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu');

  //   let params = new HttpParams()
  //     .set('page', filtro.pagina)
  //     .set('size', filtro.itensPorPagina);

  //   if (filtro.nome) {
  //     params = params.set('nome', filtro.nome);
  //   }

  //   return this.http.get(`${this.clientesUrl}`, { headers, params })
  //     .toPromise()
  //     .then((response: any) => {
  //       const clientes = response['content'];

  //       const resultado = {
  //         clientes,
  //         total: response['totalElements']
  //       };

  //       return resultado;
  //     });
  // }

  listarTodos(filtro: ClienteFiltro): Promise<any> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu');

    let params = new HttpParams()
    .set('page', filtro.pagina)
    .set('size', filtro.itensPorPagina);

    return this.http.get(this.clientesUrl, { params })
      .toPromise()
      .then((response: any) => {
        const clientes = response['content'];

        const resultado = {
          clientes,
          total: response['totalElements']
        };


        return resultado;
      });
  }

  // excluir(id: number): Promise<void> {
  //   const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu');

  //   return this.http.delete<void>(`${this.clientesUrl}/${id}`, { headers }).toPromise();
  // }

  // alterarStatus(id: number, ativo: boolean): Promise<void> {
  //   const headers = new HttpHeaders()
  //     .append('Authorization', 'Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu')
  //     .append('Content-Type', 'application/json');

  //   return this.http.put<void>(`${this.clientesUrl}/${id}/ativo`, ativo, { headers }).toPromise();

  // }



  // atualizar(cliente: Cliente): Promise<Cliente> {
  //   const headers = new HttpHeaders()
  //     .append('Authorization', 'Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu')
  //     .append('Content-Type', 'application/json');

  //   return this.http.put<Cliente>(`${this.clientesUrl}/${Cliente.id}`, c { headers })
  //     .toPromise()
  //     .then(response => response as Cliente);
  // }

  // buscarPorId(id: number): Promise<Cliente> {
  //   const headers = new HttpHeaders()
  //     .append('Authorization', 'Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu');

  //   return this.http.get(`${this.clientesUrl}/${id}`, { headers })
  //     .toPromise()
  //     .then(response => response as Cliente);
  // }

}
