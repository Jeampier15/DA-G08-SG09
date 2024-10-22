import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/about">ACERCA DE ...</Link>
          </li>
          <li>
            <Link to="/contact">CONTACTO</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTOS</Link> {/* Asegúrate de que el enlace sea correcto */}
          </li>
          <li>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              Google
            </a>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Esto es importante para renderizar las rutas hijas */}
    </>
  );
};

export default Layout;
