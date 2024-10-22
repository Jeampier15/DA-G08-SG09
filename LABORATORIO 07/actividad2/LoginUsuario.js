import React, { useContext } from 'react';
import { UsuarioContexto } from './UsuarioContexto';

const LoginUsuario = () => {
  const { iniciarSesion } = useContext(UsuarioContexto);

  const manejarInicioSesion = () => {
    const datosUsuario = { nombre: 'Usuario Ejemplo' }; // Simulación de datos de usuario
    iniciarSesion(datosUsuario);
  };

  return (
    <div>
      <button onClick={manejarInicioSesion}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginUsuario;
