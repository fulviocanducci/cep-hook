import React, {useState} from 'react'

import { useCep } from 'cep-hook'

const App = () => {
  const [value, setValue, getZip] = useCep();
  const [cep, setCep] = useState(null);
  const handleClickFindCep = async() => {
    try {
      setCep(await getZip());
    } catch (error) {
      
    }
  }
  return (
    <div>
      <div>
        {cep && cep.localidade}
      </div>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={handleClickFindCep}>Busca de CEP</button>
    </div>
  )
}
export default App
