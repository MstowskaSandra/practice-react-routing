import React from 'react';
import products from "../src/products.json";
import { useHistory, Route, Switch } from "react-router-dom";
import Shop from "../src/components/Shop";
import Product from "../src/components/Product";

const Task04 = () => {
  const history = useHistory();

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    if (sortValue) {
      history.push(`/task04/${sortValue}`);
    } else {
      history.push("/task04");
    }
  };

  return (
    <div>
      <h1>Task04</h1>

      <div>
        <label>Sortuj po: </label>
        <select onChange={handleSortChange} defaultValue="">
          <option value="">Domyślnie</option>
          <option value="id-asc">ID rosnąco</option>
          <option value="id-desc">ID malejąco</option>
          <option value="name-asc">Nazwa A-Z</option>
          <option value="name-desc">Nazwa Z-A</option>
          <option value="price-asc">Cena rosnąco</option>
          <option value="price-desc">Cena malejąco</option>
        </select>
      </div>

      <Switch>
        <Route exact path="/task04">
          <Shop products={products} />
        </Route>
        <Route path="/task04/:sort">
          {({ match }) => {
            const { sort } = match.params;
            const sortedProducts = sortProducts(products, sort);
            console.log("Sorting by:", sort);
            return <Shop products={sortedProducts} />;
          }}
        </Route>
        <Route path="/task04/product-:id" component={Product} />
      </Switch>
    </div>
  );
};

const sortProducts = (products, sortBy) => {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case "id-asc":
        return a.id - b.id;
      case "id-desc":
        return b.id - a.id;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });
};

export default Task04;

