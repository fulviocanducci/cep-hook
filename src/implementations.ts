import { IStatus, ICep } from "./interfaces";

export class Status implements IStatus {
    constructor(
        public erro?: boolean, 
        public erroText?: string,
        public error?: Error
    ) { }
}  
  
export class Cep implements ICep {
    constructor(
        public cep?: string, 
        public logradouro?: string, 
        public complemento?: string, 
        public bairro?: string, 
        public localidade?: string, 
        public uf?: string, 
        public unidade?: string,
        public ibge?: string,
        public gia?: string,
        public status?: IStatus
    ) { }
}