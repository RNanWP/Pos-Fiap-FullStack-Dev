import { useState } from "react";
import Contador from "./Contador";
import ListarItens from "./ListaItens";
import "./App.css";

function App() {
  const [mensagem, setMensagem] = useState("Hello, World!");

  const alterarMensagem = () => {
    setMensagem("Hello, React!");
  };

  return (
    <div className="app-container">
      <h1>{mensagem}</h1>
      <button onClick={alterarMensagem}>Mudar mensagem</button>

      <Contador />
      <ListarItens />
    </div>
  );
}

export default App;
