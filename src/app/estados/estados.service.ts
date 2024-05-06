import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Estado } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  estadoUrl = `${environment.apiUrl}/api/v1/estados`;

  constructor(
    private http: HttpClient
  ) { }

  buscarTodos(): Promise<any> {
    return this.http.get(this.estadoUrl)
      .toPromise().then((response: any) => {
        return response;
      });
  }
}
