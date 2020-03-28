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
