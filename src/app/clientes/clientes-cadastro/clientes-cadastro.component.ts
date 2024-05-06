import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Cidade, Cliente, CoordenadaGeografica, Endereco, Estado } from 'src/app/core/model';
import { ClientesService } from '../clientes.service';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { CidadesService } from 'src/app/cidades/cidades.service';
import { EstadosService } from 'src/app/estados/estados.service';




@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.css']
})
export class ClientesCadastroComponent implements OnInit {

  cliente = new Cliente();
  endereco = new Endereco();
  coordenadas = new CoordenadaGeografica();
  cidades!: Cidade[];
  estados!: Estado[];
  cidadesFiltradas!: Cidade[];
  estadosFiltrados!: Estado[];
  showDialog: boolean = false;
  display: any;
  center!: google.maps.LatLngLiteral;
  zoom = 15;
  cidadeSelecionada = new Cidade();
  estadoSelecionado = new Estado();

  constructor(
    private clienteService: ClientesService,
    private cidadeService: CidadesService,
    private estadoService: EstadosService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private readonly geolocation$: GeolocationService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Novo Cliente')

    const clienteId = this.route.snapshot.params['id'];
    this.cidadeService.buscarTodos()
      .then(response => {

        this.cidades = response;
        this.cidadesFiltradas = this.cidades;
      })

    this.estadoService.buscarTodos()
      .then(response => {
        this.estados = response;
        this.estadosFiltrados = this.estadosFiltrados;
      })

this.getLocation()

       this.center = this.getCenter();


  }

  abrirDialog() {
    this.showDialog = true;
  }

  getLocation(): void {
    var lets: number = 0;

    this.geolocation$.subscribe(
      (position) => {
        this.coordenadas.latitude = position.coords.latitude;
        this.coordenadas.longitude = position.coords.longitude;

        lets = position.coords.latitude
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);

      },
    );
  }

  getCenter(): any {

    if ("geolocation" in navigator) {
      var teste;
      navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        var center: google.maps.LatLngLiteral = {
          lat: latitude,
          lng: longitude
        };
        teste = center.lat  ;
        console.log("center metodo" + center.lat + center.lng);
        return center;
      });
    } else {
      console.log("Geolocalização não é suportada pelo seu navegador.");
    }
  }

  adicionarCliente(form: NgForm) {

    if (this.endereco) {

      this.endereco.cidade = this.cidadeSelecionada;
      this.endereco.cidade.estado = this.estadoSelecionado;

      this.endereco.coordenadaGeografica = this.coordenadas;

      console.log(this.endereco);

      this.cliente.endereco = this.endereco;
    }

    this.clienteService.adicionar(this.cliente)
      .then(
        clienteAdicionado => {
          this.cliente = clienteAdicionado

          console.log(this.cliente)
          this.messageService.add({ severity: 'success', detail: 'Cliente cadastrado com sucesso' });
          this.router.navigate(['/clientes', clienteAdicionado.id]);
        }
      )
      .catch(
        erro => this.errorHandler.handle(erro)
      );
  }

  novo(form: NgForm) {
    form.reset();

    setTimeout(() => {
      this.cliente = new Cliente();
      this.endereco = new Endereco();
    }, 1);

    this.router.navigate(['clientes/novo']);
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());

    this.coordenadas.latitude = this.center.lat;
    this.coordenadas.longitude = this.center.lng;

    this.fecharDialog();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  fecharDialog(){
    this.showDialog = false;
  }

  filtrarCidades(event: any) {
    const termoPesquisa = event.query.toLowerCase();

    this.cidadesFiltradas = this.cidades.filter(cidade =>
      cidade.nome!.toLowerCase().includes(termoPesquisa)
    );
  }

  filtrarEstados(event: any) {
    const termoPesquisa = event.query.toLowerCase();

    this.estadosFiltrados = this.estados.filter(estado =>
      estado.nome!.toLowerCase().includes(termoPesquisa)
    );
  }

}
