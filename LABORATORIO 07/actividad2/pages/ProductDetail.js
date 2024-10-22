import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();  // Obtener el ID de la URL

  return (
    <div>
      <h1>DETALLES DE PRODUCTOS</h1>
      <p>Detalles del producto ID {productId}</p> {/* Muestra el ID */}
    </div>
  );
};

export default ProductDetail;
