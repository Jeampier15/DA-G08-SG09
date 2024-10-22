import React from 'react';
import { ProveedorUsuario } from './UsuarioContexto';
import { ProveedorTema } from './TemaContexto';
import PerfilUsuario from './PerfilUsuario';
import LoginUsuario from './LoginUsuario';
import BotonTema from './BotonTema';
import ComponenteTematizado from './ComponenteTematizado';
import './App.css'; // Asegúrate de que el CSS esté importado

function App() {
  return (
    <ProveedorUsuario>
      <ProveedorTema>
        <div className="container">
          <BotonTema />
          <ComponenteTematizado />
          <PerfilUsuario />
          <LoginUsuario />
        </div>
      </ProveedorTema>
    </ProveedorUsuario>
  );
}

export default App;
