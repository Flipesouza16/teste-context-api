import { createContext, useState } from 'react'

export const useTesteContext = createContext({})

export function NomeContextProvider({ children }) {
  
  const [nome, setNome] = useState('nome velho')
  
  function setNomeUsuario(novoNome) {
    setNome(novoNome)
  }

  return (
    <useTesteContext.Provider
      value={{
        nome,
        setNomeUsuario
      }}
    >
      {children}
    </useTesteContext.Provider>
  )
}
