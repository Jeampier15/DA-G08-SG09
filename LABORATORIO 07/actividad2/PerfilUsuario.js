import React, { useContext } from 'react';
import { UsuarioContexto } from './UsuarioContexto';

const PerfilUsuario = () => {
  const { usuario, cerrarSesion } = useContext(UsuarioContexto);

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      {usuario ? (
        <>
          <p>Bienvenido, {usuario.nombre}!</p>
          <button onClick={cerrarSesion}>Cerrar Sesión</button> {/* Botón para cerrar sesión */}
        </>
      ) : (
        <p>Por favor, inicie sesión.</p>
      )}
    </div>
  );
};

export default PerfilUsuario;
