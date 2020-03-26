export interface IStatus {
  erro?: boolean;
  erroText?: string;
  error?: Error;
}

export interface ICep {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  unidade?: string;
  ibge?: string;
  gia?: string;
  status?: IStatus;
}
