import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Componente from './Componente';
import PrivadaRoute from './PrivadaRoute';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/componente">Componente</Link>
        <Link to="/ruta-privada">Ruta Privada</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/componente" component={Componente} />
        <PrivadaRoute path="/ruta-privada" component={() => <h1>Ruta Privada</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
