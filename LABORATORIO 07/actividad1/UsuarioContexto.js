import React, { createContext, useState } from 'react';

// Crear el contexto
const UsuarioContexto = createContext();

// Crear un proveedor de contexto
const ProveedorUsuario = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const iniciarSesion = (datosUsuario) => {
    setUsuario(datosUsuario);
  };

  const cerrarSesion = () => {
    setUsuario(null);
  };

  return (
    <UsuarioContexto.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </UsuarioContexto.Provider>
  );
};

export { UsuarioContexto, ProveedorUsuario };
