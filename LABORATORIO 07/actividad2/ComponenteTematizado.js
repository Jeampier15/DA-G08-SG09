import React, { useContext } from 'react';
import { TemaContexto } from './TemaContexto';

const ComponenteTematizado = () => {
  const { tema } = useContext(TemaContexto);

  return (
    <div className={`tematizado ${tema}`}>
      <h1>Componente Tematizado</h1>
      <p>El tema actual es {tema}.</p>
    </div>
  );
};

export default ComponenteTematizado;
