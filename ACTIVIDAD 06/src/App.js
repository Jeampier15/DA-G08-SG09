import React, { useState } from 'react';
import './App.css';

// Componente TarjetaProducto
function TarjetaProducto({ nombre, precio, imagen, onClick }) {
  return (
    <div className="tarjeta-producto" onClick={onClick}>
      <img src={imagen} alt={nombre} className="imagen-producto" />
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
    </div>
  );
}

// Componente principal
function App() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [panelAbierto, setPanelAbierto] = useState(false);

  // Lista completa de productos con descripciones extendidas
  const productos = [
    {
      id: 1,
      nombre: 'Televisor',
      precio: '1000.00',
      imagen: 'tv.jpg',
      descripcion: 'Televisor de alta definición de 50 pulgadas con tecnología HDR y resolución 4K, ideal para disfrutar de películas y series con una calidad de imagen impresionante.',
      categoria: 'Electrodomésticos'
    },
    {
      id: 2,
      nombre: 'Refrigerador',
      precio: '1500.00',
      imagen: 'refrigerador.jpg',
      descripcion: 'Refrigerador de doble puerta con capacidad de 500 litros. Equipado con tecnología de ahorro de energía y un sistema de enfriamiento avanzado que mantiene los alimentos frescos por más tiempo.',
      categoria: 'Electrodomésticos'
    },
    {
      id: 3,
      nombre: 'Lavadora',
      precio: '800.00',
      imagen: 'lavadora.jpg',
      descripcion: 'Lavadora de carga frontal con capacidad de 10 kg y múltiples programas de lavado, incluyendo un ciclo rápido de 30 minutos, perfecta para ahorrar tiempo y energía.',
      categoria: 'Electrodomésticos'
    },
    {
      id: 4,
      nombre: 'Microondas',
      precio: '250.00',
      imagen: 'microondas.jpg',
      descripcion: 'Microondas con función de grill y capacidad de 30 litros. Ideal para cocinar y dorar alimentos de manera rápida y eficiente.',
      categoria: 'Electrodomésticos'
    },
    {
      id: 5,
      nombre: 'Ventilador',
      precio: '150.00',
      imagen: 'ventilador.jpg',
      descripcion: 'Ventilador de torre con control remoto y temporizador. Proporciona un flujo de aire potente y uniforme, perfecto para refrescar cualquier habitación durante el verano.',
      categoria: 'Electrodomésticos'
    },
    {
      id: 6,
      nombre: 'Aire Acondicionado',
      precio: '1200.00',
      imagen: 'aireacondicionado.jpg',
      descripcion: 'Aire acondicionado con tecnología de ahorro de energía y modos automáticos de temperatura. Perfecto para mantener el ambiente fresco en los días calurosos.',
      categoria: 'Electrodomésticos'
    },
    {
      id: 7,
      nombre: 'Plancha',
      precio: '60.00',
      imagen: 'plancha.jpg',
      descripcion: 'Plancha a vapor con suela antiadherente y tecnología avanzada para eliminar arrugas fácilmente en cualquier tipo de tejido.',
      categoria: 'Electrodomésticos'
    },
    {
      id: 8,
      nombre: 'Aspiradora',
      precio: '300.00',
      imagen: 'aspiradora.jpg',
      descripcion: 'Aspiradora con filtro HEPA, ideal para eliminar alérgenos y mantener tu hogar limpio y libre de polvo.',
      categoria: 'Electrodomésticos'
    },
    {
      id: 9,
      nombre: 'Estufa',
      precio: '400.00',
      imagen: 'estufa.jpg',
      descripcion: 'Estufa de gas con encendido automático y quemadores de alta eficiencia. Ideal para cocinar de forma rápida y segura.',
      categoria: 'Electrodomésticos'
    },
    {
      id: 10,
      nombre: 'Robot de Cocina',
      precio: '500.00',
      imagen: 'robotdecocina.jpg',
      descripcion: 'Robot de cocina multifunción con más de 10 programas, ideal para realizar desde batidos hasta recetas más complejas de forma fácil.',
      categoria: 'Electrodomésticos'
    }
  ];

  // Función para manejar el clic en una tarjeta de producto
  const seleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
    setPanelAbierto(true);
  };

  // Función para cerrar el panel
  const cerrarPanel = () => {
    setPanelAbierto(false);
  };

  return (
    <div className="App">
      <h1>Catálogo de Productos</h1>
      <div className="catalogo">
        {productos.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            onClick={() => seleccionarProducto(producto)}
          />
        ))}
      </div>

      {/* Panel lateral para mostrar la descripción del producto */}
      <div className={`panel-descripcion ${panelAbierto ? 'abierto' : ''}`}>
        {productoSeleccionado && (
          <>
            <h2>{productoSeleccionado.nombre}</h2>
            <p>{productoSeleccionado.descripcion}</p>
            <p>Precio: ${productoSeleccionado.precio}</p>
            <p>Categoría: {productoSeleccionado.categoria}</p>
            <button className="boton-cerrar" onClick={cerrarPanel}>
              Cerrar
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
