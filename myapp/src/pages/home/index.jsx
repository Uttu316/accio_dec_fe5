import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./index.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header title="Home" />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to ShopEase</h1>
          <p>
            Discover the latest trends in fashion, electronics, and more. Shop
            with ease and style.
          </p>
          <button className={styles.ctaButton}>Shop Now</button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="E-commerce shopping"
          className={styles.heroImage}
        />
      </section>

      <section className={styles.features}>
        <h2>Why Choose ShopEase?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Fast delivery"
            />
            <h3>Fast Delivery</h3>
            <p>
              Get your orders delivered quickly and safely to your doorstep.
            </p>
          </div>
          <div className={styles.feature}>
            <img
              src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Quality products"
            />
            <h3>Quality Products</h3>
            <p>
              We offer only the highest quality products from trusted brands.
            </p>
          </div>
          <div className={styles.feature}>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Customer support"
            />
            <h3>24/7 Support</h3>
            <p>Our customer support team is here to help you anytime.</p>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <h2>About Our Store</h2>
        <p>
          ShopEase is your one-stop destination for all your shopping needs.
          From fashion to electronics, we have everything you need to enhance
          your lifestyle. Join thousands of satisfied customers and experience
          shopping like never before.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
