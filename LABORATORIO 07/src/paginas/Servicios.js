import { Link, Outlet } from "react-router-dom";

const Servicios = () => (
  <>
    <h1>Nuestros Servicios</h1>
    <Link to="desarrollo-web">Desarrollo Web</Link>
    <Link to="desarrollo-movil">Desarrollo Móvil</Link>
    <Outlet />
  </>
);

export default Servicios;
