import { useState } from "react";
import ProductsList from ".";
import ProductsFilter from "../productsFilter";

const ProductListWrapper = ({ products }) => {
  const [count, setCount] = useState(0);
  const [selectedFilter, setFilter] = useState("all");

  console.log("Product List Wrapper Rendered");

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Update {count}</button>
      <ProductsFilter setFilter={setFilter} selectedFilter={selectedFilter} />
      <ProductsList selectedFilter={selectedFilter} products={products} />
    </>
  );
};
export default ProductListWrapper;
