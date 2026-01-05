import { useParams, Link, useNavigate } from "react-router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import { api } from "../../services";
import styles from "./Product.module.css";
import { FaStar, FaShoppingCart, FaBolt } from "react-icons/fa";

const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const loadProduct = async () => {
    try {
      setStatus("loading");
      const res = await api({
        endpoint: `/products/${productId}`,
      });
      setProduct(res);
      setStatus("success");
    } catch (e) {
      console.log(e);
      setStatus("error");
    }
  };

  useEffect(() => {
    loadProduct();
  }, [productId]);

  const incrementQty = () => setQuantity((prev) => prev + 1);
  const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "success";
  const hasProduct = isSuccess && product !== null && product.id;
  const hasNoProduct = isSuccess && (!product || !product.id);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        {hasProduct && (
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <span>{product.title}</span>
          </div>
        )}

        {isLoading && (
          <div className={styles.centerContent}>
            <div className={styles.loader}></div>
            <p>Loading product details...</p>
          </div>
        )}

        {isError && (
          <div className={styles.centerContent}>
            <div className={styles.errorBox}>
              <h3>Oops! Something went wrong.</h3>
              <p>We couldn't load the product. Please try again later.</p>
              <button className={styles.retryBtn} onClick={loadProduct}>
                Retry
              </button>
              <button
                className={styles.exploreBtn}
                onClick={() => navigate("/products")}
              >
                Explore Products
              </button>
            </div>
          </div>
        )}

        {hasNoProduct && (
          <div className={styles.centerContent}>
            <h2>Product Not Found</h2>
            <p>
              The product you are looking for does not exist or has been
              removed.
            </p>
            <Link to="/products" className={styles.exploreBtn}>
              Explore More Products
            </Link>
          </div>
        )}

        {hasProduct && (
          <div className={styles.productLayout}>
            <div className={styles.leftSide}>
              <div className={styles.imageWrapper}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.bigImage}
                />
              </div>
            </div>
            <div className={styles.rightSide}>
              <span className={styles.category}>{product.category}</span>
              <h1 className={styles.title}>{product.title}</h1>

              <div className={styles.ratingContainer}>
                <div className={styles.ratingBadge}>
                  {product.rating?.rate} <FaStar size={12} />
                </div>
                <span className={styles.reviews}>
                  {product.rating?.count} Ratings & Reviews
                </span>
              </div>

              <div className={styles.priceContainer}>
                <div className={styles.price}>${product.price}</div>
              </div>

              <div className={styles.descriptionTitle}>Product Description</div>
              <p className={styles.description}>{product.description}</p>

              <div className={styles.quantitySection}>
                <span className={styles.quantityLabel}>Quantity:</span>
                <div className={styles.quantityControls}>
                  <button
                    className={styles.qtyBtn}
                    onClick={decrementQty}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <div className={styles.qtyValue}>{quantity}</div>
                  <button className={styles.qtyBtn} onClick={incrementQty}>
                    +
                  </button>
                </div>
              </div>

              <div className={styles.actions}>
                <button className={styles.addToCartBtn}>
                  <FaShoppingCart /> Add to cart
                </button>
                <button className={styles.buyNowBtn}>
                  <FaBolt /> Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Product;
