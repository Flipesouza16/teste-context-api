import React, { useContext } from 'react'
import { useTesteContext } from './nomeContext'

function LabelNome() {
  const { nome } = useContext(useTesteContext)

  return (
    <h1>{nome}</h1>
  )
}

export { LabelNome }