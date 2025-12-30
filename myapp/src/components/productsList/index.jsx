import ProductItem from "./productItem";
import styles from "./index.module.css";

const ProductsList = ({ products, selectedFilter }) => {
  const filteredProducts =
    selectedFilter === "all"
      ? products
      : products.filter((product) => product.category === selectedFilter);

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
