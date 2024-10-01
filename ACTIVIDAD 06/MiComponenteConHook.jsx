import React, { useState, useEffect } from 'react';

function MiComponenteConHook() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default MiComponenteConHook;
