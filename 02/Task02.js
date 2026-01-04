import React from "react";
import products from "../src/products.json";
import { Link, Switch, Route } from "react-router-dom";
import Product from "../src/components/Product";

const Task02 = () => {
  return (
    <div>
      <h1>Task02</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/task02/product-${product.id}`}>
              {product.name} ({product.category}) - {product.price}zł
            </Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path="/task02/product-:id" component={Product} />
      </Switch>
    </div>
  );
};

export default Task02;
