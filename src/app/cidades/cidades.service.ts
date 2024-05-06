import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cidade } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  cidadessUrl = `${environment.apiUrl}/api/v1/cidades`;

  constructor(
    private http: HttpClient
  ) { }

  buscarTodos(): Promise<any> {
    return this.http.get(this.cidadessUrl)
      .toPromise().then((response: any) => {
        return response;
      });
  }
}
