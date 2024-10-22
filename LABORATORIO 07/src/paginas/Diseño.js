import { Outlet, Link } from "react-router-dom";

const Diseño = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/acerca">Acerca</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Diseño;
