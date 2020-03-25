import { Cep, Status } from './implementations';

function cepErrorInvalid(): Cep {
  return new Cep(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '', 
      new Status(true, "Cep inválido ou inexistente", new Error("Cep inválido ou inexistente"))
    );
}

function cepErrorCatch(e: Error): Cep {
  return new Cep(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '', 
      new Status(true, e.message, e)
    ); 
}



function cepErrorFormatInvalid(): Cep {
    return new Cep(
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '', 
        new Status(true, 'Formato inválido', new Error('Formato inválido'))
    ); 
}

function cepDataOk(data: any): Cep {
    return new Cep(
      data.cep, 
      data.logradouro, 
      data.complemento, 
      data.bairro, 
      data.localidade, 
      data.uf, 
      data.unidade, 
      data.ibge, 
      data.gia, 
      new Status(false, undefined, undefined)
    );
}

function cepRequest(value: string): Promise<Response> {
    return fetch(`http://viacep.com.br/ws/${value}/json/`, {mode: 'cors'});
}

function cepTestFormatValid(value: string): boolean {
    const v = value.replace(/\D/g, '');
    const vc = /^[0-9]{8}$/;
    return vc.test(v);
}

export  {
    cepErrorCatch,
    cepErrorInvalid,
    cepErrorFormatInvalid,
    cepDataOk,
    cepRequest,
    cepTestFormatValid
}