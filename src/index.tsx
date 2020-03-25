import * as React from 'react';

export interface status { 
 erro: boolean;
}

export interface cep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  unidade: string;
  ibge: string;
  gia: string;
}

export function useCep(): [string, React.Dispatch<React.SetStateAction<string>>, () => Promise<cep | status |undefined>] {
  const [value, setValue] = React.useState<string>('');
  const getZip = async(): Promise<cep | status | undefined> => {
    try {
      const response = await fetch(`http://viacep.com.br/ws/${value}/json/`, {mode: 'cors'});
      if (response.ok){
        return await response.json();
      }
    } catch (error) {
      throw error
    }
    return undefined;
  }
  return [value, setValue, getZip];
}