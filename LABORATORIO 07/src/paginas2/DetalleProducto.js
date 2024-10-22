import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const { idProducto } = useParams();
  return <h1>Detalles del Producto {idProducto}</h1>;
};

export default DetalleProducto;
