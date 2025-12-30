import styles from "./productItem.module.css";

const ProductItem = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={product.image} alt={product.title} />
      </div>
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.footer}>
        <div className={styles.priceRating}>
          <span className={styles.price}>${product.price}</span>
          <span className={styles.rating}>{product.rating.rate}/5</span>
        </div>
        <button className={styles.addButton}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
