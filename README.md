# cep-hook

> CEP do Brasil do WebApi Viacep.com.br

[![NPM](https://img.shields.io/npm/v/cep-hook.svg)](https://www.npmjs.com/package/cep-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save cep-hook
```

## Usage 
```tsx
import React, { useState } from 'react'

import { useCep } from 'cep-hook'

const App = () => {
  const [value, setValue, getZip] = useCep();
  const [cep, setCep] = useState(null);
  const handleClickFindCep = async() => {
    try {
      const c = await getZip();      
      setCep(c);
    } catch (error) {
      
    }
  }
  if (cep && cep.erro) { // error cep invalido
    return <div>Error</div>
  }
  return (
    <div>
      <div>
        <p>{cep && cep.cep}</p>
        <p>{cep && cep.logradouro}</p>
        <p>{cep && cep.complemento}</p>
        <p>{cep && cep.bairro}</p>
        <p>{cep && cep.localidade}</p>
        <p>{cep && cep.uf}</p>
        <p>{cep && cep.unidade}</p>
        <p>{cep && cep.ibge}</p>
        <p>{cep && cep.gia}</p>
      </div>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={handleClickFindCep}>Busca de CEP</button>
    </div>
  )
}
export default App
```

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
