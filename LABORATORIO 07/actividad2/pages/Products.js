import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    { id: 1, name: "Producto 1" },
    { id: 2, name: "Producto 2" },
    { id: 3, name: "Producto 3" }
  ];

  return (
    <div>
      <h1>LISTA DE PRODUCTOS</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link> {/* Enlace dinámico */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
