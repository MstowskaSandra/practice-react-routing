import React, { useState, useCallback } from "react";
import products from "../src/products.json";
import Shop from "../src/components/Shop";
import Product from "../src/components/Product";
import { useHistory, Switch, Route } from "react-router-dom";

const Task05 = () => {
  const history = useHistory();

  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    searchTerm: "",
  });

  const urlParams = new URLSearchParams(history.location.search.slice(1));
  const initialFilters = {
    minPrice: urlParams.get("min") || "",
    maxPrice: urlParams.get("max") || "",
    searchTerm: urlParams.get("search") || "",
  };

  const handleFilterChange = useCallback(
    (field, value) => {
      const newFilters = { ...filters, [field]: value };
      setFilters(newFilters);

      const params = new URLSearchParams();
      if (newFilters.minPrice) params.set("min", newFilters.minPrice);
      if (newFilters.maxPrice) params.set("max", newFilters.maxPrice);
      if (newFilters.searchTerm) params.set("search", newFilters.searchTerm);

      const queryString = params.toString();
      const newPath = queryString ? `/task05?${queryString}` : "/task05";

      history.push(newPath);
    },
    [filters, history]
  );

  const filteredProducts = products.filter((product) => {
    const minPrice = parseInt(filters.minPrice) || 0;
    const maxPrice = parseInt(filters.maxPrice) || Infinity;

    const priceOk = product.price >= minPrice && product.price <= maxPrice;
    const searchOk =
      !filters.searchTerm ||
      product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      product.description
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase());

    return priceOk && searchOk;
  });

  return (
    <div>
      <h1>Task05</h1>

      <div>
        <div>
          <label>Cena od: </label>
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange("minPrice", e.target.value)}
            placeholder="np. 40"
          />
        </div>
        <div>
          <label>Cena do: </label>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
            placeholder="np. 70"
          />
        </div>
        <div>
          <label>Szukaj: </label>
          <input
            type="text"
            value={filters.searchTerm}
            onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
            placeholder="np. react"
          />
        </div>
      </div>
      <p>
        Znalezione: {filteredProducts.length}/{products.length}
      </p>

      <Shop products={filteredProducts} />

      <Switch>
        <Route path="/task05/product-:id" component={Product} />
      </Switch>
    </div>
  );
};

export default Task05;
