import ProductItem from "./productItem";
import styles from "./index.module.css";
import { useMemo } from "react";

// this component will rerender on parent component update(any state,prop change)
const ProductsList = ({ products, selectedFilter }) => {
  console.log("Products List Rendered");
  const filteredProducts = useMemo(() => {
    console.log("Filtered Products Called");
    return selectedFilter === "all"
      ? products
      : products.filter((product) => product.category === selectedFilter);
  }, [products, selectedFilter]);

  const isEmpty = filteredProducts.length === 0;

  return (
    <div className={styles.listContainer}>
      {isEmpty && <p className={styles.emptyMessage}>No Products Available</p>}
      {filteredProducts.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductsList;
