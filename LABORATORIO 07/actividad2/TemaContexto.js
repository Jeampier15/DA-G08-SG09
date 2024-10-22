import React, { createContext, useState } from 'react';

// Crear el contexto
const TemaContexto = createContext();

// Crear un proveedor de contexto
const ProveedorTema = ({ children }) => {
  const [tema, setTema] = useState(() => {
    const temaGuardado = localStorage.getItem('tema');
    return temaGuardado ? temaGuardado : 'claro'; // Carga el tema guardado o usa 'claro' por defecto
  });

  const cambiarTema = () => {
    const nuevoTema = tema === 'claro' ? 'oscuro' : 'claro';
    setTema(nuevoTema);
    localStorage.setItem('tema', nuevoTema); // Guardar el tema en el almacenamiento local
  };

  return (
    <TemaContexto.Provider value={{ tema, cambiarTema }}>
      {children}
    </TemaContexto.Provider>
  );
};

export { TemaContexto, ProveedorTema };
