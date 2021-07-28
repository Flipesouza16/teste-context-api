import React, { useContext, useState } from 'react'
import { useTesteContext } from "./nomeContext";

function Formulario() {
  const { setNomeUsuario } = useContext(useTesteContext);
  const [nomeLocal, setNomeLocal] = useState('')

  return (
    <div>
      <label>Nome</label>
      
      <input onChange={(e) => {
        setNomeLocal(e.target.value)
      }}></input>

      <button onClick={() => setNomeUsuario(nomeLocal)}>Salvar</button>

      <h1>{nomeLocal}</h1>
    </div>
  )
}

export { Formulario }