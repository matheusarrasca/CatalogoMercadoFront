import { useState } from "react";
import Header from "./components/Header/Header";

function App() {

  const [contador, setContador] = useState(0);

  return (
    <div>
      <Header titulo="Catálogo" />

      <h2>Contador</h2>

      <p>{contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default App;
