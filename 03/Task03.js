import React from "react";
import products from "./../src/products.json";
import { Link, Switch, Route } from "react-router-dom";
import Shop from "../src/components/Shop";
import Product from "../src/components/Product";

const Task03 = () => {
  return (
    <div>
      <h1>Task03</h1>
      <nav>
        <Link to="/task03">Wszystkie</Link> |{" "}
        <Link to="/task03/javascript">JavaScript</Link> |{" "}
        <Link to="/task03/react">React</Link>
      </nav>

      <Switch>
        <Route exact path="/task03">
          <Shop products={products} />
        </Route>
        <Route path="/task03/:category">
          {({ match }) => {
            const { category } = match.params;
            const filtered = products.filter(
              (p) => p.category.toLowerCase() === category.toLowerCase()
            );
            console.log("category:", category, "count:", filtered.length);
            return <Shop products={filtered} />;
          }}
        </Route>
        <Route path="/task03/product-:id" component={Product} />
      </Switch>
    </div>
  );
};

export default Task03;
