import React, { useContext } from 'react';
import { TemaContexto } from './TemaContexto';

const BotonTema = () => {
  const { cambiarTema } = useContext(TemaContexto);

  return (
    <button onClick={cambiarTema}>Cambiar Tema</button>
  );
};

export default BotonTema;
