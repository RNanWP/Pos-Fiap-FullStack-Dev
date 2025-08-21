import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>Incrementar Valores</button>
      <button onClick={decrementar}>Decrementar Valores</button>
    </div>
  );
}

export default Contador;