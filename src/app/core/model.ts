export class Cliente {
  id!: number;
  nome!: string;
  cnpj!: string;
  endereco = new Endereco();
}

export class Endereco {
  id?: number;
  logradouro?: string;
  complemento?: string;
  cep?: string;
  bairro?: string;
  numero?: string;
  cidade!: Cidade;
  cliente!: Cliente;
  coordenadaGeografica?: CoordenadaGeografica;
}

export class Cidade {
  id!: number;
  nome!: string;
  estado!: Estado;
}

export class Estado {
  id?:  number;
  nome?: string;
  uf?: string;
}

export class CoordenadaGeografica {
  id!: number;
  latitude!: number;
  longitude!: number;
}
