import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Diseño from './paginas2/Diseño';
import Inicio from './paginas2/Inicio';
import Productos from './paginas2/Productos';
import DetalleProducto from './paginas2/DetalleProducto';
import NoEncontrado from './paginas2/NoEncontrado';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Diseño />}>
          <Route index element={<Inicio />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/:idProducto" element={<DetalleProducto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
