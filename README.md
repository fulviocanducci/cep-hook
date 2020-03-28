# cep-hook

> CEP do Brasil do WebApi Viacep.com.br

[![NPM](https://img.shields.io/npm/v/cep-hook.svg)](https://www.npmjs.com/package/cep-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![npm](https://img.shields.io/npm/dt/cep-hook?style=plastic)](https://www.npmjs.com/package/cep-hook) ![Node.js CI](https://github.com/fulviocanducci/cep-hook/workflows/Node.js%20CI/badge.svg)

## Install

```bash
npm install --save cep-hook
```

## Usage

```tsx
import React, { useState } from "react";

import { useCep } from "cep-hook";

const App = () => {
  const [value, setValue, getZip] = useCep();
  const [cep, setCep] = useState(null);

  const handleClickFindCep = async () => setCep(await getZip());

  return (
    <div>
      <div>
        <p>Cep: {cep && cep.cep}</p>
        <p>Logradouro: {cep && cep.logradouro}</p>
        <p>Complemento: {cep && cep.complemento}</p>
        <p>Bairro: {cep && cep.bairro}</p>
        <p>Localidade: {cep && cep.localidade}</p>
        <p>UF: {cep && cep.uf}</p>
        <p>Unidade: {cep && cep.unidade}</p>
        <p>Ibge: {cep && cep.ibge}</p>
        <p>Gia: {cep && cep.gia}</p>
        {cep && cep.status && cep.status.erro && (
          <pre>Error: {JSON.stringify(cep.status, undefined, 2)}</pre>
        )}
      </div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={handleClickFindCep}>Busca de CEP</button>
    </div>
  );
};
export default App;
```

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
