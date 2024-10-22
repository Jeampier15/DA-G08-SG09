import { useContext } from "react";
import { UsuarioContexto } from "../Contexto/UsuarioContexto";

const Componente3 = () => {
  const { usuario, setUsuario } = useContext(UsuarioContexto);

  return (
    <div>
      <h2>Componente 3</h2>
      <p>Hola de nuevo, {usuario}!</p>
      <button onClick={() => setUsuario("Carlos")}>Cambiar Usuario</button>
    </div>
  );
};

export default Componente3;
