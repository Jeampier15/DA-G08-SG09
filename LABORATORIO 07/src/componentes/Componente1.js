import { useState } from "react";
import { UsuarioContexto } from "../Contexto/UsuarioContexto";
import Componente2 from "./Componente2";

const Componente1 = () => {
  const [usuario, setUsuario] = useState("Joaquín");

  return (
    <UsuarioContexto.Provider value={{ usuario, setUsuario }}>
      <h1>Hola, {usuario}!</h1>
      <Componente2 />
    </UsuarioContexto.Provider>
  );
};

export default Componente1;
