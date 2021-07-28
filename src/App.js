import "./App.css";
import { Formulario } from "./formulario";
import React from "react";
import { NomeContextProvider } from "./nomeContext";
import { LabelNome } from "./labelNome";

function App() {
  return (
    <div className="App">
      <NomeContextProvider>
        <Formulario></Formulario>
        <LabelNome></LabelNome>
      </NomeContextProvider>
    </div>
  );
}

export default App;
