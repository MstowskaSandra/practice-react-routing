import React from "react";
import products from '../products.json';
import { useParams } from "react-router-dom";


const Product = () => {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <div>Nie znaleziono produktu o nr:{id}</div>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p><strong>Kategoria:</strong> {product.category}</p>
            <p><strong>Cena:</strong> {product.price}zł</p>
            <p>{product.description}</p>
        </div>
    );
};

export default Product;