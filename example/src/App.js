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
