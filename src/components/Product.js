import React from "react";
import products from '../products.json';
import { useParams, Link } from "react-router-dom";

const Product = ({ id, name, description, category, price }) => {
  if (id && name && !useParams().id) {
    return (
      <div>
        <h3>
          <Link to={`/task03/product-${id}`} style={{ textDecoration: "none" }}>
            {name}
          </Link>
        </h3>
        <p>
          <strong>Kategoria:</strong> {category}
        </p>
        <p>
          <strong>Cena:</strong> {price}zł
        </p>
      </div>
    );
  }

  const { id: urlId } = useParams();
  const productId = parseInt(urlId, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Nie znaleziono produktu o nr:{urlId}</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>
        <strong>Kategoria:</strong> {product.category}
      </p>
      <p>
        <strong>Cena:</strong> {product.price}zł
      </p>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;